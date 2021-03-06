import React from 'react';
import useGoogleSearch from '../hooks/useGoogleSearch';
import { useStateValue } from '../redux/StateProvider';
import '../style/SearchPage.css';
import Response from '../JSON/response';
import { Link } from 'react-router-dom';
import Search from '../component/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { TramOutlined } from '@material-ui/icons';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();

	// LIVE API REQUEST
	const { data } = useGoogleSearch(term);

	// Mock API Call
	//const data = Response;
	//console.log(data);

	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<Link
					to="/"
					style={{ textDecoration: 'none' }}>
					<h2 className="searchPage__logo">
						Chanathip's Search engine
					</h2>
				</Link>
				<div className="searchPage__headerBody">
					<Search hideButtons />

					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="/all">
									All
								</Link>
							</div>
							<div className="searchPage__option">
								<DescriptionIcon />
								<Link to="/all">
									News
								</Link>
							</div>
							<div className="searchPage__option">
								<ImageIcon />
								<Link to="/all">
									Images
								</Link>
							</div>
							<div className="searchPage__option">
								<LocalOfferIcon />
								<Link to="/all">
									shopping
								</Link>
							</div>
							<div className="searchPage__option">
								<RoomIcon />
								<Link to="/all">
									maps
								</Link>
							</div>
							<div className="searchPage__option">
								<MoreVertIcon />
								<Link to="/all">
									more
								</Link>
							</div>
						</div>
						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">
									Settings
								</Link>
							</div>
							<div className="searchPage__option">
								<Link to="/tools">
									Tools
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{term && (
				<div className="searchPage__results">
					<p className="searchPage__resultCount">
						About{' '}
						{
							data?.searchInformation
								.formattedTotalResults
						}
						(
						{
							data?.searchInformation
								.formattedSearchTime
						}{' '}
						seconds) for {term}
					</p>
					{data?.items.map(item => (
						<div className="searchPage__result">
							<a
								className="searchPage__resultImage"
								href={item.link}
								target="_blank">
								{item.pagemap
									?.cse_image
									?.length > 0 &&
									item.pagemap
										?.cse_image[0]
										?.src && (
										<img
											className="searchPage__resultImage"
											src={
												item
													.pagemap
													?.cse_image[0]
													?.src
											}
											alt="search result image"
										/>
									)}
								{item.displayLink}
							</a>
							<a
								className="searchPage__resultTitle"
								href={item.link}>
								<h2>{item.title}</h2>
							</a>
							<p className="searchPage__resultSnippet">
								{item.snippet}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchPage;
