import React, { useState } from 'react';
import '../style/Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Search({ hideButtons = false }) {
	const [input, setInput] = useState('');
	const history = useHistory();

	const handleChange = e => {
		setInput(e.target.value);
	};

	const search = e => {
		e.preventDefault();

		// do search with input
		history.push('/search');
	};

	return (
		<form className="search">
			<div className="search__input">
				<SearchIcon className="search__inputIcon" />
				<input
					onChange={handleChange}
					value={input}
				/>
				<MicIcon />
			</div>
			{!hideButtons ? (
				<div className="search__buttons">
					<Button
						type="submit"
						onClick={search}
						variant="outlined">
						Search
					</Button>
					<Button variant="outlined">
						I'm Feeling Lucky
					</Button>
				</div>
			) : (
				<div className="search__buttons">
					<Button
						className="search__buttonHidden"
						type="submit"
						onClick={search}
						variant="outlined">
						Search
					</Button>
					<Button
						className="search__buttonHidden"
						variant="outlined">
						I'm Feeling Lucky
					</Button>
				</div>
			)}
		</form>
	);
}

export default Search;
