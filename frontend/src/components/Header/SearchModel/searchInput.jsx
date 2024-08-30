import { Search, X as CloseIcon } from 'lucide-react';

const SearchInput = ({ searchTerm, setSearchTerm, handleSearch, onClose }) =>
	<div className="flex items-center border-b border-gray-300 pb-2">
		<Search className="text-gray-400 mr-2"/>
		<input
			type="text"
			placeholder="What are you looking for?"
			className="flex-grow outline-none text-sm md:text-lg lg:text-xl"
			value={ searchTerm }
			onChange={ (e) => setSearchTerm(e.target.value) }
			onKeyDown={ (e) => e.key === 'Enter' && handleSearch(searchTerm) }
		/>
		<button onClick={ onClose } className="ml-2">
			<CloseIcon className="text-gray-400"/>
		</button>
	</div>;

export default SearchInput;