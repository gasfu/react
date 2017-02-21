import React from 'react';

import Search from './Search.jsx';
import Teams from './Teams.jsx';

import TeamsAction from '../../Action/TeamsAction.js';


class Home extends React.Component {
	constructor () {
		super();
		TeamsAction.all;
		this.state = { header: '' }	
	}

	componentDidMount () {
		this.refs.search.refs.input.addEventListener('keyup', () => this.change());
		this.refs.search.refs.input.focus();
	}

	change () {
		let input = this.refs.search.refs.input;
		this.setState({ header: input.value != '' ? '--top' : '' });
		this.refs.teams.setState({ teams: input.value != '' ? TeamsAction.getString(input.value) : ''});
	}

	render () {
		return (
			<section id="home">
				<header className={'home-header ' + this.state.header}>
					<Search ref="search" />
				</header>
				<main>
					<Teams ref="teams"/>
				</main>
			</section>			
		);
	}
}

export default Home;