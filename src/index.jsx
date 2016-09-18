import React, { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import StopWatch from './app/components/stopwatch.component.jsx';
import Timebar from './app/components/timebar.component.jsx';
import Buttons from './app/components/buttons.component.jsx';

injectTapEventPlugin();

render(
	<MuiThemeProvider>
  		<StopWatch title="Stopwatch" subtitle="Stopwatch made using React"/>
  	</MuiThemeProvider>,
  	document.getElementById('container')
)
