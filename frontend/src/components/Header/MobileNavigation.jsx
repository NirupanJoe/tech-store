
const data = [
	{ name: 'Log-In/Sign-Up', href: '#' },
	{ name: 'Smartphones', href: '#' },
	{ name: 'Tablets', href: '#' },
	{ name: 'Order', href: '#' },
];

const MobileNavigation = ({ isMenuOpen }) =>
	isMenuOpen && <nav className="lg:hidden py-4">
		{ data.map((item) =>
			<a
				key={ item.name }
				href={ item.href }
				className="block py-2 text-black-600 hover:text-black hover:font-bold"
			>{ item.name }</a>) }
	</nav>;

export default MobileNavigation;
