import React from 'react';
import Navigation from './Navigation/Navigation.jsx';

class Layout extends React.Component {
	
	render () {
		return ( 
			<seciton>
				<Navigation />
				<div className='container'>
					{this.props.children}
				</div>
			</seciton>
		);
	}
}

export default Layout;