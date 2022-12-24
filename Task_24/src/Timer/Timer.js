import React from 'react';

const twoDigits = (num) => String(num).padStart(2, '0');
const checkProps = (num = 0) => num;

class Timer extends React.Component {
  constructor(props) {
    super();
    this.state = { hours: checkProps(props.hours), minutes: checkProps(props.minutes), seconds: checkProps(props.seconds) };
    this.countDown = this.countDown.bind(this);
    this.startTimer();
  }

  startTimer() {
    if(this.state.hours != 0 || this.state.minutes != 0 || this.state.seconds != 0){
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {

    let seconds = this.state.seconds - 1;
    let minutes;
    let hours;
    if(seconds < 0){
      minutes = this.state.minutes - 1;
      seconds = 59;
    }
    else{
      minutes = this.state.minutes;
    }

    if(minutes < 0){
      hours = this.state.hours - 1;
      minutes = 59;
    }
    else{
      hours = this.state.hours;
    }

    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    });
    
    if (hours == 0 && minutes == 0 && seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <h3>
        {twoDigits(this.state.hours)}:{twoDigits(this.state.minutes)}:{twoDigits(this.state.seconds)}
      </h3>
    );
  }
}
export default Timer;