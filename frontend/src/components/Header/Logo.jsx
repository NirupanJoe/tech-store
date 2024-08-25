import logo from '../../assets/logo.svg';

const Logo = () =>
	<div className="flex items-center">
		<img
			src={ logo }
			alt="TechStore Logo"
			className="h-8 w-auto"
		/>
	</div>;

export default Logo;
