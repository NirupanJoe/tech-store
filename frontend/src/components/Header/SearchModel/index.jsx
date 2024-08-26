import { useEffect, useRef } from 'react';
import SearchModelContainer from './SearchModelContainer';

const useHandleClickOutside = (
	isOpen, onClose, modalRef,
) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if(modalRef.current && !modalRef.current.contains(event.target))
				onClose();
		};

		if(isOpen)
			document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose, modalRef]);
};

const SearchModal = ({ isOpen, onClose }) => {
	const modalRef = useRef(null);

	useHandleClickOutside(
		true, onClose, modalRef,
	);
	if(!isOpen)
		return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center
			items-start pt-20"
		>
			<div ref={ modalRef } className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
				<div className="p-4">
					<SearchModelContainer { ...{ onClose } }/>
				</div>
			</div>
		</div>
	);
};

export default SearchModal;
