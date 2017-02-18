import React from 'react';

const HelloWord = React.createClass({
	propTypes: {
		name: React.PropTypes.string
	},

	render(){

		let name = this.props.name ? this.props.name : "Anonimo"; 
		return <h1>Hello Word - {name}</h1>;
	}
});

export default HelloWord;