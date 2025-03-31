import { Link, useLocation } from 'react-router-dom';

const navigationLinks = [
	{
		name: 'Smartphones',
		to: '/smartphones',
	},
	{
		name: 'Tablets',
		to: '/tablets',
	},
];

const DesktopNavigation = () => {
	const location = useLocation();

	return (
		<nav className="hidden lg:flex space-x-6">
			{ navigationLinks.map((item) => {
				const isSelected = location.pathname === item.to;

				return (
					<Link
						key={ item.name }
						to={ item.to }
						className={ `text-md px-3 py-1 font-medium transition-all text-black hover:bg-black hover:text-white hover:rounded-[40px]
							${ isSelected && 'bg-black text-white rounded-[40px]' }` }
					>
						{ item.name }
					</Link>
				);
			}) }
		</nav>
	);
};

export default DesktopNavigation;
