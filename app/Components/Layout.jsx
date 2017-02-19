import React from 'react';
import Navigation from './Navigation/Navigation.jsx';

class Layout extends React.Component {
	
	render () {
		return ( 
			<seciton>
				<Navigation />
				<main className='container main'>
					{this.props.children}
				</main>
			</seciton>
		);
	}
}

export default Layout;