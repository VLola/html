import React, { Component } from 'react';
import './Symbols.css';
import Symbol from './Symbol';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#9e9e9e',
      contrastText: '#757575',
    },
  },
});
  
export class Symbols extends Component {
  static displayName = Symbols.name;

  constructor(props) {
    super(props);
    this.state = { symbols: [], array: [], sockets: [], search: "", slide: [0 , 40000]};
    this.sliderChange = this.sliderChange.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  componentDidMount() {
    this.populateSymbolData();
  }

  searchChange(event){
    this.setState({search: event.target.value});
    if(event.target.value !== ""){
      let symbols = this.state.array.filter(symbol=>symbol.symbol.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()) && symbol.price > this.state.slide[0] && symbol.price < this.state.slide[1]);
      this.setState({symbols: symbols});
    }
    else{
      let symbols = this.state.array.filter(symbol=>symbol.price > this.state.slide[0] && symbol.price < this.state.slide[1]);
      this.setState({symbols: symbols});
    }
  }

  sliderChange(event){
    this.setState({slide: event.target.value});
    if(this.state.search !== ""){
      let symbols = this.state.array.filter(symbol=>symbol.symbol.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase() && symbol.price > event.target.value[0] && symbol.price < event.target.value[1]));
      this.setState({symbols: symbols});
    }
    else{
      let symbols = this.state.array.filter(symbol=>symbol.price > event.target.value[0] && symbol.price < event.target.value[1]);
      this.setState({symbols: symbols});
    }
  }

  render() {
    return (
      <div>
        <div className='div__flex'>
          <div className='div__slider'>
            <ThemeProvider theme={theme}>
              <Slider value={this.state.slide} onChange={this.sliderChange} max={this.state.max} valueLabelDisplay="auto" color='neutral'/>
            </ThemeProvider>
          </div>
        </div>
        <div className='div__flex'>
          <input type="search" placeholder='Search'value={this.state.search} onChange={this.searchChange}></input>
        </div>
        <div className='div__symbols'>
          {this.state.symbols.map(symbol=>
            <Symbol key={symbol.symbol} symbol={symbol} socket={this.state.sockets.find(socket=>socket.symbol === symbol.symbol)}></Symbol>
          )}
        </div>
      </div>
    );
  }

  async populateSymbolData() {
    const response = await fetch('https://fapi.binance.com/fapi/v1/ticker/price');
    const data = await response.json();

    let array = [];
    let sockets = [];
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if(data[i].symbol.endsWith("USDT")){
        if((Number)(data[i].price) > max) max = (Number)(data[i].price);
        let socket = new WebSocket(`wss://stream.binance.com:9443/ws/${data[i].symbol.toLowerCase()}@aggTrade`);
        sockets.push({symbol: data[i].symbol, socket: socket});
        array.push(data[i]);
      }
      if(array.length > 80) break;
    }
    max += 100;
    this.setState({ array: array, symbols: array, slide: [0, max], max: max, sockets: sockets });

  }
}
export default Symbols;