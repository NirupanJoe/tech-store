import config from '../actions/config';

const helper = { formatPrice: (price) => price.toFixed(config.decimalPlaces) };

export default helper;
