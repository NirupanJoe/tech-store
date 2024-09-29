import { Link } from 'react-router-dom';
import LogoTech from '../../assets/logo.svg';

const Logo = () =>
	<div className="flex items-center">
		<Link to="/">
			<LogoTech/>
		</Link>
	</div>;

export default Logo;
