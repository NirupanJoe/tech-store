import { useState } from 'react';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import Icons from './Icons';
import MobileNavigation from './MobileNavigation';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-4">
					<Logo/>
					<DesktopNavigation/>
					<Icons { ...{ isMenuOpen, setIsMenuOpen, isProfileOpen, setIsProfileOpen } }/>
				</div>
				<MobileNavigation { ...{ isMenuOpen } }/>
			</div>
		</header>
	);
};

export default Header;
