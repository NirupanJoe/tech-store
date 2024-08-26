
const popularKeywords = [
	'Galaxy S24 Ultra',
	'Galaxy S23',
];

const KeywordList = ({ keywords = popularKeywords, handleSearch, title }) =>
	<div className="mt-4">
		{ title && <h3 className="font-semibold mb-2">{ title }</h3> }
		<ul>
			{ keywords.map((keyword, index) =>
				<li
					key={ index }
					className="py-1 cursor-pointer hover:text-blue-600"
					onClick={ () => handleSearch(keyword) }
				>
					{ keyword }
				</li>) }
		</ul>
	</div>;

export default KeywordList;
