
const data = [
	{
		name: 'Smartphones',
		href: '#',
	},
	{
		name: 'Tablets',
		href: '#',
	},
];

const DesktopNavigation = () =>
	<nav className="hidden lg:flex space-x-6">
		{
			data.map((item) =>
				<a
					key={ item.name }
					href={ item.href }
					className="text-black text-md px-3 py-1
           font-medium hover:bg-black hover:text-white hover:rounded-[40px]"
				>
					{ item.name }
				</a>)
		}
	</nav>;

export default DesktopNavigation;
