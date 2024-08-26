
const Footer = () =>
	<div className="bg-gray-100">
		<div className="container mx-auto px-4">
			<div className="flex flex-col items-center justify-center py-4 md:flex-row">
				<p className="text-center text-sm text-gray-500">
					Copyright © { new Date().getFullYear() } TechStore. All rights reserved.</p>
			</div>
		</div>
	</div>;

export default Footer;
