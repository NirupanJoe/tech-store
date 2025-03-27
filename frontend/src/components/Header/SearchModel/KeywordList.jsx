const KeywordList = ({ keywords = [], setSearchTerm, handleSearch }) => {
	const handleClick = (keyword) => {
		setSearchTerm(keyword);
		handleSearch(keyword);
	};

	return <div className="mt-3">
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
