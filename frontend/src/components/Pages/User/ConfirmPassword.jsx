import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Label = () =>
	<label htmlFor="ConfirmPassword" className="block text-sm font-medium text-gray-700">
		Confirm Password
	</label>;

const TogglePasswordButton = ({ showPassword, setShowPassword }) =>
	<button
		type="button"
		className="absolute inset-y-0 right-0 pr-3 flex items-center"
		onClick={ () => setShowPassword(!showPassword) }
	>
		{ showPassword
			? <EyeOff className="h-5 w-5 text-gray-400"/>
			: <Eye className="h-5 w-5 text-gray-400"/> }
	</button>;

const Input = (props) => {
	const { confirmPassword, setConfirmPassword } = props;
	const [showPassword, setShowPassword] = useState(false);

	return <div className="mt-1 relative">
		<input
			id="ConfirmPassword"
			name="ConfirmPassword"
			type={ showPassword ? 'text' : 'password' }
			autoComplete="current-password"
			required={ true }
			className="appearance-none block w-full px-3 py-2 border border-gray-300
						rounded-md shadow-sm placeholder-gray-400 focus:outline-none
						focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			value={ confirmPassword }
			onChange={ (e) => setConfirmPassword(e.target.value) }
		/>
		<TogglePasswordButton { ...{ ...props, showPassword, setShowPassword } }/>
	</div>;
};

const ConfirmPasswordInput = (props) =>
	<div>
		<Label/>
		<Input { ...props }/>
	</div>;

export default ConfirmPasswordInput;
