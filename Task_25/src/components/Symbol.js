import React, { Component } from 'react';
import './Symbol.css';
import { VictoryChart, VictoryCandlestick, VictoryLabel, VictoryAxis, VictoryTooltip } from 'victory';



export class Symbol extends Component {
  static displayName = Symbol.name;

  constructor(props) {
    super(props);
    this.state = { socket: props.socket.socket, symbol: props.symbol.symbol, price: props.symbol.price , selected: false, klines: [] };
    this.click = this.click.bind(this);
    this.leave = this.leave.bind(this);
    this.newKline = this.newKline.bind(this);
    this.setPrice = this.setPrice.bind(this);
  }

  componentDidMount() {
    this.state.socket.addEventListener('message', (event) => {
      this.setPrice(event);
    });
  }

  setPrice(event){
    let obj = JSON.parse(event.data);
    this.setState({ price: (Number)(obj.p)});
  }

  newKline(kline){
    return {
      x: kline[0]
      , open: kline[1]
      , close: kline[4]
      , high: kline[2]
      , low: kline[3]
      , label: `open: ${kline[1]}\nclose: ${kline[4]}\nhigh: ${kline[2]}\nlow: ${kline[3]}\n${new Date(kline[0]).toLocaleString()}`};
  }

  async click(){
    let response = await fetch('https://fapi.binance.com/fapi/v1/klines?symbol='+this.state.symbol+'&interval=1m&limit=100');
    let data = await response.json();
    let klines = data.map(kline=>this.newKline(kline));
    this.setState({ klines: klines, selected: true });
  }

  leave(){
    this.setState({ selected: false });
  }

  render() {
    if(this.state.selected){
      return (
        <div className='div__chart' onClick={this.leave}>
          <VictoryChart >
            <VictoryLabel text={this.state.symbol} x={225} y={30} textAnchor="middle"/>
            <VictoryLabel text={this.state.price} x={225} y={50} textAnchor="middle"/>
            <VictoryAxis dependentAxis/>
            <VictoryCandlestick
              candleColors={{ positive: "green", negative: "red" }}
              labels={({ datum }) => datum.label}
              labelComponent={<VictoryTooltip flyoutWidth={150}/>}
              data={this.state.klines}
            />
          </VictoryChart>
              
        </div>
      );
    }
    else{
      return (
        <div className='div__symbol' onClick={this.click}>
          <div>{this.state.symbol}</div>
          <div>{this.state.price}</div>
        </div>
      );
    }
  }

}
export default Symbol;