const Loader = ({ className }) =>
	<div className={ `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${ className }` }>
		<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"/>
	</div>;

export default Loader;
