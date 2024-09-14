import { useState } from 'react';
import { Star } from 'lucide-react';

const defaultTotalStars = 5;
const defaultSize = 16;
const emptyStarColor = '#d3d3d3';
const fullStarColor = '#FFAA4E';
const borderColor = 'currentColor';
const fullStarBorderColor = 'text-yellow-700';
const emptyStarBorderColor = 'text-gray-500';

const renderEmptyStar = (size) =>
	<Star
		className={ emptyStarBorderColor }
		size={ size }
		stroke={ borderColor }
		fill={ emptyStarColor }
	/>;

const renderFullStar = (size) =>
	<Star
		className={ `absolute top-0 left-0 ${ fullStarBorderColor }` }
		size={ size }
		stroke={ borderColor }
		fill={ fullStarColor }
	/>;

const renderStars = (
	totalStars, rating, size, handleRating, readOnly,
) => [...Array(totalStars)].map((dummy, i) => {
	const isFullStar = i + 1 <= Math.floor(rating);

	return (
		<div
			key={ i }
			className={ `relative ${ !readOnly && 'cursor-pointer' }` }
			onClick={ () => !readOnly && handleRating(i + 1) }
		>
			{ renderEmptyStar(size) }
			{ isFullStar && renderFullStar(size) }
		</div>
	);
});

const Rating = ({
	totalStars = defaultTotalStars, value = 0,
	size = defaultSize, readOnly = false,
}) => {
	const [rating, setRating] = useState(value);

	const handleRating = (rate) => {
		if(!readOnly)
			setRating(rate);
	};

	return (
		<div className="flex space-x-1">
			{ renderStars(
				totalStars, rating, size, handleRating, readOnly,
			) }
		</div>
	);
};

export default Rating;
