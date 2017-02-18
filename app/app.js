import React from 'react';
import ReactDOM from 'react-dom';
import HelloWord from './components/helloWord.jsx';

ReactDOM.render(
	<HelloWord name="Gabriel Furlan" />,
	document.querySelector('#app')
);