import React, {Component} from 'react';

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import Timebar from './timebar.component.jsx';
import Buttons from './buttons.component.jsx';


class StopWatch extends Component {
	constructor() {
		super();
		this.state = {
			mode: 0,
			timeElapsed: {
				initial: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		}
	}

  	render() {
			return (
      		<Card className="stopwatch">
						<CardHeader title={this.props.title} subtitle={this.props.subtitle} />
      			<CardText>
        			<Timebar timeElapsed={this.state.timeElapsed}  />
        		</CardText>
        		<CardActions>
        			<Buttons mode={this.state.mode} start={this.startStopWatch.bind(this)} pause={this.pauseStopWatch.bind(this)} stop={this.stopStopWatch.bind(this)} reset={this.resetStopWatch.bind(this)} />
        		</CardActions>
        	</Card>
    	)
  	}

  	startStopWatch() {
  		this.setState({ initialTime: Date.now(), mode: 1, timeElapsed: {
				initial: this.state.timeElapsed.initial,
				hours: this.state.timeElapsed.hours,
				minutes: this.state.timeElapsed.minutes,
				seconds: this.state.timeElapsed.seconds,
				miliseconds: this.state.timeElapsed.miliseconds
			}, interval: window.setInterval(() => { this.stopWatchTick(); }, 20) });
  	}

		pauseStopWatch() {
			window.clearInterval(this.state.interval);
			this.setState({ mode: 2, timeElapsed: { initial: this.state.timeElapsed.elapsed, hours: this.state.timeElapsed.hours, minutes: this.state.timeElapsed.minutes, seconds: this.state.timeElapsed.seconds, miliseconds: this.state.timeElapsed.miliseconds } })
		}

  	stopStopWatch() {
  		window.clearInterval(this.state.interval);
  		this.setState({ mode: 2 });
  	}

  	resetStopWatch() {
  		this.setState({ mode: 0, timeElapsed: { initial: 0, hours: 0, minutes: 0, seconds: 0, miliseconds: 0 } });
  	}

  	stopWatchTick() {
  		var timeElapsed = Date.now() - this.state.initialTime + this.state.timeElapsed.initial;
			var elapsed = timeElapsed;

  		var hours = Math.floor(timeElapsed / 3600000);
  		timeElapsed -= hours * 3600000;

  		var minutes = Math.floor(timeElapsed / 60000);
  		timeElapsed -= minutes * 60000;

  		var seconds = Math.floor(timeElapsed / 1000);
  		timeElapsed -= seconds * 1000;

  		var miliseconds = timeElapsed;

  		this.setState({
  			timeElapsed: {
					initial: this.state.timeElapsed.initial,
	  			hours: hours,
	  			minutes: minutes,
	  			seconds: seconds,
	  			miliseconds: miliseconds,
					elapsed: elapsed
	  		}
  		});
  	}
}

export default StopWatch;