
const Button = ({ isDisabled, label, className, ...props }) =>
	<button
		disabled={ isDisabled }
		className={ `md:w-80 w-full h-10 py-2 my-6 rounded-full text-white
				${ isDisabled ? 'bg-neutral-300 text-neutral-400' : 'bg-primary-500' } ${ className }` }
		{ ...props }
	>
		{ label }
	</button>;

export default Button;
