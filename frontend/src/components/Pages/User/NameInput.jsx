const Label = () =>
	<label htmlFor="name" className="block text-sm font-medium text-gray-700">
		Name
	</label>;

const Input = ({ name, setName }) =>
	<div className="mt-1">
		<input
			id="name"
			name="name"
			type="text"
			autoComplete="name"
			required={ true }
			className="appearance-none block w-full px-3 py-2 border border-gray-300
						rounded-md shadow-sm placeholder-gray-400 focus:outline-none
						focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			value={ name }
			onChange={ (e) => setName(e.target.value) }
		/>
	</div>;

const NameInput = (props) =>
	<div>
		<Label/>
		<Input { ...props }/>
	</div>;

export default NameInput;
