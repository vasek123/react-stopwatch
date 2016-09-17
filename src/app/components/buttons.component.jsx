import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var style = {
	margin: 12
}

class Buttons extends Component {
  	render() {
    	return (
      		<div className="stopwatch-buttons" style={this.props.style}>
       	 		<RaisedButton label="Start" primary={true} disabled={this.props.mode != 0} style={style} onClick={this.props.start} />
       	 		<RaisedButton label="Stop" primary={true} disabled={this.props.mode != 1} style={style} onClick={this.props.stop} />
      	  		<RaisedButton label="Reset" primary={true} disabled={this.props.mode != 2} style={style} onClick={this.props.reset} />
      		</div>
    	)
  	}
}

export default Buttons;