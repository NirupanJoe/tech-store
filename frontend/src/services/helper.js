import config from '../actions/config';

const helper = { formatPrice: (price) => Number(price.toFixed(config.decimalPlaces)) };

export default helper;
