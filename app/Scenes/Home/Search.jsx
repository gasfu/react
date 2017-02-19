import React from 'react';

class Search extends React.Component {
	render () {
		return (
			<form className='form'>
					<div className='input-group'>
						<span className="icon"></span>
						<input ref="input" className="input" type='text' placeholder='Encontre um time' />
					</div>
			</form>
		);
	}
}

export default Search;