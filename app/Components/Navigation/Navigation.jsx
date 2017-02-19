import React from 'react';
import Brand from './Brand.jsx'

class Navigation extends React.Component {
	render () {
		return (
			<nav className="nav">
				<Brand />
			</nav>
		);	
	}
}

export default Navigation;