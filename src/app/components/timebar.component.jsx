import React, { Component } from 'react';

class Timebar extends Component {
	render() {
		return (
			<div className="stopwatch-timebar">
				<h2>{this.parseNumber(this.props.timeElapsed.hours)}:{this.parseNumber(this.props.timeElapsed.minutes)}:{this.parseNumber(this.props.timeElapsed.seconds)}.{this.parseNumber(this.props.timeElapsed.miliseconds)}</h2>
			</div>
		)
	}

	parseNumber(n) {
		if (n < 10) {
			n = '0' + n;
		}
		if (n > 99) {
			n = n.toString().substr(0, 2);
		}
		return n;
	}
}

export default Timebar;