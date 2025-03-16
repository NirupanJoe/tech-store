import { useState } from 'react';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import Icons from './Icons';
import MobileNavigation from './MobileNavigation';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-4">
					<Logo/>
					<DesktopNavigation { ...{ setIsMenuOpen } }/>
					<Icons { ...{ isMenuOpen, setIsMenuOpen, isProfileOpen, setIsProfileOpen } }/>
				</div>
				<MobileNavigation { ...{ isMenuOpen, setIsMenuOpen } }/>
			</div>
		</header>
	);
};

export default Header;
