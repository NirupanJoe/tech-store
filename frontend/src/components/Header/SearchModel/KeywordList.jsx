import config from '../../../actions/config';

const KeywordList = ({ keywords = config.popularKeywords, setSearchTerm, handleSearch, title }) => {
	const handleClick = (keyword) => {
		setSearchTerm(keyword);
		handleSearch(keyword);
	};

	return <div className="mt-4">
		{ title && <h3 className="font-semibold mb-2">{ title }</h3> }
		<ul>
			{ keywords.map((keyword, index) =>
				<li
					key={ index }
					className="py-1 cursor-pointer hover:text-blue-600"
					onClick={ () => handleClick(keyword) }
				>
					{ keyword }
				</li>) }
		</ul>
	</div>;
};

export default KeywordList;
