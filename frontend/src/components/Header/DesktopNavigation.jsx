import { useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
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
	const [selected, setSelected] = useState(null);

	return <nav className="hidden lg:flex space-x-6">
		{
			data.map((item) =>
				<Link
					key={ item.name }
					to={ item.to }
					className={ `text-black text-md px-3 py-1 ${ (item.name === selected) && 'bg-black text-white rounded-[40px]' }
           font-medium hover:bg-black hover:text-white hover:rounded-[40px]` }
					onClick={ () => setSelected(item.name) }
				>
					{ item.name }
				</Link>)
		}
	</nav>;
};

export default DesktopNavigation;
