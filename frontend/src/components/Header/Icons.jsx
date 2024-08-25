import { Menu, X as XIcon, ShoppingCart, Search, User } from 'lucide-react';

const profileOpenData = [
	{ name: 'Login/Sign-Up', href: '#' },
	{ name: 'Order', href: '#' },
];

const ProfileOpen = () =>
	<div className="absolute right-0 w-48 bg-white rounded-md shadow-lg py-1 z-10">
		{ profileOpenData.map((item) =>
			<a
				key={ item.name }
				href={ item.href }
				className="block px-4 py-2 text-sm text-black-700
				hover:text-black hover:font-bold"
			>
				{ item.name }
			</a>) }
	</div>;

const ProfileMenu = ({ isProfileOpen, setIsProfileOpen }) =>
	<div
		className="relative"
		onMouseEnter={ () => setIsProfileOpen(true) }
		onMouseLeave={ () => setIsProfileOpen(false) }
	>
		<div className="flex items-center cursor-pointer">
			<User className="h-6 w-6 text-gray-600"/>
		</div>
		{ isProfileOpen && <ProfileOpen { ...{ setIsProfileOpen } }/> }
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

const Icons = ({ isMenuOpen, setIsMenuOpen, isProfileOpen, setIsProfileOpen }) =>
	<div className="flex items-center space-x-4">
		<ProfileMenu isProfileOpen={ isProfileOpen } setIsProfileOpen={ setIsProfileOpen }/>
		<Search className="h-6 w-6 text-gray-600 cursor-pointer"/>
		<CartIcon/>
		<MenuToggle isMenuOpen={ isMenuOpen } setIsMenuOpen={ setIsMenuOpen }/>
	</div>;

export default Icons;
