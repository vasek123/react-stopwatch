import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton'
import PlayArrowIcon from 'material-ui/svg-icons/av/play-arrow';
import PauseIcon from 'material-ui/svg-icons/av/pause';
import ReplayIcon from 'material-ui/svg-icons/av/replay';
import { blue500 } from 'material-ui/styles/colors';

var style = {
	margin: 10
}

class Buttons extends Component {
	render() {
  	return (
    	<div className="stopwatch-buttons" style={this.props.style}>
				<IconButton tooltip={this.props.mode == 0 || this.props.mode == 2 ? 'Start' : 'Pause'} onClick={this.props.mode == 0 || this.props.mode == 2 ? this.props.start : this.props.pause}>
					{this.props.mode == 0 || this.props.mode == 2 ? <PlayArrowIcon color={blue500} /> : <PauseIcon color={blue500} />}
				</IconButton>
				<IconButton tooltip="Reset" onClick={this.props.reset} disabled={this.props.mode != 2}>
					<ReplayIcon color={blue500} />
				</IconButton>
			</div>
    )
  }
}

export default Buttons;