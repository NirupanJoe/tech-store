
const Footer = () =>
	<div className="bg-white">
		<div className="container mx-auto p-4">
			<hr className="my-2 border-gray-300"/>
			<div className="flex flex-col items-center justify-center py-4 md:flex-row">
				<p className="text-center sm:text-base text-sm text-gray-500">
					Copyright © { new Date().getFullYear() } TechStore. All rights reserved.</p>
			</div>
		</div>
	</div>;

export default Footer;
