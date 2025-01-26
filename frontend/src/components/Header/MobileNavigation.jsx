import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const categories = [
	{ name: 'Smartphones', to: '/smartphones' },
	{ name: 'Tablets', to: '/tablets' },
];
const guestLinks = [{ name: 'Log-In/Sign-Up', to: '/login' }];
const profileLinks = [{ name: 'Orders', to: '#' }];
const authLinks = [
	{ name: 'My Page', to: '/myPage' },
	{ name: 'Orders', to: '#' },
	{ name: 'Log Out', to: '/logout' },
];

const LinkList = ({ links, setIsMenuOpen }) =>
	<Fragment>
		{ links.map((item) =>
			<Link
				key={ item.name }
				to={ item.to }
				className="block py-2 text-black-600 hover:text-black hover:font-bold"
				onClick={ () => setIsMenuOpen(false) }
			>
				{ item.name }
			</Link>) }
		<hr className="my-2 border-gray-300"/>
	</Fragment>;

const ProfileUnauthenticated = ({ setIsMenuOpen }) =>
	<Fragment>
		<LinkList links={ guestLinks } setIsMenuOpen={ setIsMenuOpen }/>
		<LinkList links={ categories } setIsMenuOpen={ setIsMenuOpen }/>
		<LinkList links={ profileLinks } setIsMenuOpen={ setIsMenuOpen }/>
	</Fragment>;

const ProfileAuthenticated = ({ user, setIsMenuOpen }) =>
	<Fragment>
		<div className="block py-2 text-black-600">
			Hi, { user.name }
		</div>
		<hr className="my-2 border-gray-300"/>
		<LinkList links={ categories } setIsMenuOpen={ setIsMenuOpen }/>
		<LinkList links={ authLinks } setIsMenuOpen={ setIsMenuOpen }/>
	</Fragment>;

const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }) => {
	const { isAuthenticated, user } = useSelector((state) => state.authState);

	return (
		isMenuOpen
			&& <nav className="lg:hidden py-4">
				{ isAuthenticated
					? <ProfileAuthenticated user={ user } setIsMenuOpen={ setIsMenuOpen }/>
					: <ProfileUnauthenticated setIsMenuOpen={ setIsMenuOpen }/> }
			</nav>
	);
};

export default MobileNavigation;
