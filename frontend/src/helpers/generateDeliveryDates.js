import { addDays, format } from 'date-fns';

const defaultMinDate = 3;
const defaultMaxDate = 5;
const defaultDaysCount = 7;

const generateDeliveryDates = (
	daysCount = defaultDaysCount,
	minDate = defaultMinDate,
	maxDate = defaultMaxDate,
) => {
	const offset = Math.floor(Math.random() * minDate) + maxDate;

	return Array.from({ length: daysCount }, (dummy, i) => {
		const date = addDays(new Date(), i + offset);

		return {
			full: format(date, 'EEEE, d MMM'),
			day: format(date, 'EEEE'),
			date: format(date, 'd'),
			month: format(date, 'MMM'),
		};
	});
};

export default generateDeliveryDates;
