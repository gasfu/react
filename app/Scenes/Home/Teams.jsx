import React from 'react';
import Http from './../../Utils/Http.js';
import CardsTeam from './CardsTeams.jsx'

class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.state = {teams: {}};
	}

	render () {
		let html = (team) => <CardsTeam image={team.coat_of_arms}>{team.name}</CardsTeam>;
		return <ul className="row">{Object.values(this.state.teams).map(html)}</ul>;
	}
}

export default Teams;