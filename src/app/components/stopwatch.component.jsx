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
      			<CardText>
        			<Timebar timeElapsed={this.state.timeElapsed}  />
        		</CardText>
        		<CardActions>
        			<Buttons mode={this.state.mode} start={this.start.bind(this)} stop={this.stop.bind(this)} reset={this.reset.bind(this)} />
        		</CardActions>
        	</Card>
    	)
  	}

  	componentWillMount() {
  		this.setState({ initialTime: Date.now() });
  	}

  	start() {
  		this.setState({ mode: 1, interval: window.setInterval(() => { this.tick(); }, 10) });
  	}

  	stop() {
  		window.clearInterval(this.state.interval);
  		this.setState({ mode: 2 });
  	}

  	reset() {
  		this.setState({ initialTime: Date.now(), mode: 0, timeElapsed: { hours: 0, minutes: 0, seconds: 0, miliseconds: 0 } });
  	}

  	tick() {
  		var timeElapsed = Date.now() - this.state.initialTime;
  		
  		var hours = Math.floor(timeElapsed / 3600000);
  		timeElapsed -= hours * 3600000;

  		var minutes = Math.floor(timeElapsed / 60000);
  		timeElapsed -= minutes * 60000;

  		var seconds = Math.floor(timeElapsed / 1000);
  		timeElapsed -= seconds * 1000;

  		var miliseconds = timeElapsed;

  		this.setState({
  			timeElapsed: {
	  			hours: hours,
	  			minutes: minutes,
	  			seconds: seconds,
	  			miliseconds: miliseconds
	  		}
  		});
  	}
}

export default StopWatch;