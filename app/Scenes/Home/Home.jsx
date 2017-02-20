import React from 'react';

import Search from './Search.jsx';
import Teams from './Teams.jsx';


class Home extends React.Component {
	constructor () {
		super();
		this.state = {
			header: ''
		}	
	}

	componentDidMount () {
		this.refs.search.refs.input.addEventListener('keyup', () => this.change());
		this.refs.search.refs.input.focus();
	}

	change () {
		let input = this.refs.search.refs.input;
		window.sessionStorage.setItem('teste', input.value);
		this.setState({
			header: input.value != '' ? '--top' : ''
		});


	}

	render () {
		return (
			<section id="home">
				<header className={'home-header ' + this.state.header}>
					<Search ref="search" />
				</header>
				<main>
					<Teams />
				</main>
			</section>			
		);
	}
}

export default Home;