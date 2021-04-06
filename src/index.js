import React from 'react';
import ReactDOM from 'react-dom';
import Fibonacci from './components/Fibonacci';

ReactDOM.render(
	<React.StrictMode>
		<Fibonacci depth="30" />
	</React.StrictMode>,
	document.getElementById('app')
);
