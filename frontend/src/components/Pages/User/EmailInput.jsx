const Label = () =>
	<label htmlFor="email" className="block text-sm font-medium text-gray-700">
		Email address
	</label>;

const Input = ({ email, setEmail }) =>
	<div className="mt-1">
		<input
			id="email"
			name="email"
			type="email"
			autoComplete="email"
			required={ true }
			className="appearance-none block w-full px-3 py-2 border border-gray-300
						rounded-md shadow-sm placeholder-gray-400 focus:outline-none
						focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			value={ email }
			onChange={ (e) => setEmail(e.target.value) }
		/>
	</div>;

const EmailInput = (props) =>
	<div>
		<Label/>
		<Input { ...props }/>
	</div>;

export default EmailInput;
