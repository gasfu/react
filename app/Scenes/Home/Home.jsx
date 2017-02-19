import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			header: ''
		}
		
	}

	componentDidMount () {
		this.refs.search.refs.input.addEventListener('change', () => this.change(this));
		this.refs.search.refs.input.focus();
	}

	change () {

		let input = this.refs.search.refs.input
		this.setState({
			header: input.value != '' ? '--top' : ''
		});

		console.log(this.state.header)
	}

	render () {
		return (
			<header className={'home-header ' + this.state.header}>
				<Search ref="search" />
			</header>
		);
	}

}

export default Home;