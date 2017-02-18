import React from 'react';

const HelloWord = React.createClass({
	render(){
		return <h1>Hello Word - {this.props.name}</h1>;
	}
});

export default HelloWord;