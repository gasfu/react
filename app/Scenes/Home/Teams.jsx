import React from 'react';
import Http from './../../Utils/Http.js';

class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.state = {teams: {}};
	}

	render () {
		let html = (team) => <h4>{team.name}</h4>;
		return <div>{Object.values(this.state.teams).map(html)}</div>;
	}
}

export default Teams;