import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../component/Search';

function Home() {
	return (
		<div className="home">
			<div className="home__header">
				<div className="home__headerLeft">
					<Link to="/about">about</Link>
					<Link to="/store">store</Link>
				</div>
				<div className="home__headerRight">
					<Link to="/gmail">Gmail</Link>
					<Link to="/images">Images</Link>
					<AppsIcon />
					<Avatar />
				</div>
			</div>
			<div className="home__body">
				<h1>Chanathip's Search engine</h1>
				<div className="home__inputContainer">
					<Search />
				</div>
			</div>
		</div>
	);
}

export default Home;
