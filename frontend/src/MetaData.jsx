import { Helmet } from 'react-helmet-async';

const MetaData = ({ title }) =>
	<Helmet>
		<title>{ title } | Tech Store</title>
	</Helmet>;

export default MetaData;
