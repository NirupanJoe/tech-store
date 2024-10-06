import { Link } from 'react-router-dom';

const data = [
	{ name: 'Log-In/Sign-Up', to: '#' },
	{ name: 'Smartphones', to: '/smartphones' },
	{ name: 'Tablets', to: '/tablets' },
	{ name: 'Order', to: '#' },
];

const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }) =>
	isMenuOpen && <nav className="lg:hidden py-4">
		{ data.map((item) =>
			<Link
				key={ item.name }
				to={ item.to }
				className="block py-2 text-black-600 hover:text-black hover:font-bold"
				onClick={ () => setIsMenuOpen(false) }
			>{ item.name }</Link>) }
	</nav>;

export default MobileNavigation;
