import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	//creating the text state and the function to use when setting it.
	const [text, setText] = useState('');

	//Virtual DOM manipulation methods
	const onChange = (event) => setText(event.target.value);

	const onSubmit = (event) => {
		event.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
