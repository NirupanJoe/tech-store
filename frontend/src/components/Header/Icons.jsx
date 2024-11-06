import { Menu, X as XIcon, ShoppingCart, Search, User } from 'lucide-react';
import { Fragment, useState } from 'react';
import SearchModal from './SearchModel';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const profileOpenData = [
	{ name: 'Login/Sign-Up', to: '/login' },
	{ name: 'Orders', to: '#' },
];

const authLinks = [
	{ name: 'Orders', to: '#' },
	{ name: 'Log Out', to: '/logout' },
];

const ProfileLink = ({ name, to }) =>
	<Link
		to={ to }
		className="block px-4 py-2 text-sm text-black-700 hover:text-black hover:font-bold"
	>
		{ name }
	</Link>;

const ProfileAuthenticated = ({ user }) =>
	<Fragment>
		<div className="block px-4 py-2 text-sm text-black-700 hover:text-black hover:font-bold">
			Hi, { user.name }
		</div>
		{ authLinks .map((item) =>
			<ProfileLink key={ item.name } { ...item }/>) }
	</Fragment>;

const ProfileUnauthenticated = () =>
	<Fragment>
		{ profileOpenData.map((item) =>
			<ProfileLink key={ item.name } { ...item }/>) }
	</Fragment>;

const ProfileOpen = () => {
	const { isAuthenticated, user } = useSelector((state) => state.authState);

	return (
		<div className="absolute right-0 top-6 w-48 bg-white rounded-md shadow-lg py-1 z-10">
			{ isAuthenticated
				? <ProfileAuthenticated user={ user }/>
				: <ProfileUnauthenticated/> }
		</div>
	);
};

const ProfileMenu = ({ isProfileOpen, setIsProfileOpen }) =>
	<div
		className="lg:block relative hidden"
		onMouseEnter={ () => setIsProfileOpen(true) }
		onMouseLeave={ () => setIsProfileOpen(false) }
	>
		<div className="flex items-center cursor-pointer">
			<User className="h-6 w-6 text-gray-600"/>
			{ isProfileOpen && <ProfileOpen { ...{ setIsProfileOpen } }/> }
		</div>
	</div>;

const CartIcon = () =>
	<div className="relative">
		<ShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer"/>
		<span className="absolute -top-2 -right-2 bg-red-500
		text-white rounded-full w-4 h-4 flex items-center justify-center text-lg"
		>0</span>
	</div>;

const Close = ({ setIsMenuOpen }) =>
	<XIcon
		className="h-6 w-6 text-gray-600 cursor-pointer"
		onClick={ () => setIsMenuOpen(false) }
	/>;

const MenuIcon = ({ setIsMenuOpen }) =>
	<Menu className="h-6 w-6 text-gray-600 cursor-pointer" onClick={ () => setIsMenuOpen(true) }/>;

const MenuToggle = ({ isMenuOpen, setIsMenuOpen }) =>
	<div className="lg:hidden">
		{ isMenuOpen
			? <Close { ...{ setIsMenuOpen } }/>
			: <MenuIcon { ...{ setIsMenuOpen } }/> }
	</div>;

const SearchIcon = () => {
	const [isOpen, setOpen] = useState(false);

	const onClose = () => setOpen(!isOpen);

	return <div>
		<Search onClick={ onClose } className="h-6 w-6 text-gray-600 cursor-pointer"/>
		{ isOpen && <SearchModal { ...{ isOpen, onClose } }/> }
	</div>;
};

const Icons = ({ isMenuOpen, setIsMenuOpen, isProfileOpen, setIsProfileOpen }) =>
	<div className="flex items-center space-x-4">
		<ProfileMenu isProfileOpen={ isProfileOpen } setIsProfileOpen={ setIsProfileOpen }/>
		<SearchIcon/>
		<CartIcon/>
		<MenuToggle isMenuOpen={ isMenuOpen } setIsMenuOpen={ setIsMenuOpen }/>
	</div>;

export default Icons;
