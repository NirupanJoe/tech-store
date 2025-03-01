import { Link } from 'react-router-dom';

const HomePageButton = () =>
	<Link to="/">
		<button className="bg-primary-400 text-white px-6 py-2 rounded-lg
			hover:bg-primary-500 transition"
		>
			Go to Homepage
		</button>
	</Link>;

export default HomePageButton;
