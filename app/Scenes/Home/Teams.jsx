import React from 'react';
import Http from './../../Utils/Http.js';

class Teams extends React.Component {
	constructor() {
		super();
		this.state = {
			teams: []
		}
	}

	render () {
		let teams = Object.keys(this.state.teams).map(() => this.state.teams[key]);
		return null;
	}
}

export default Teams;