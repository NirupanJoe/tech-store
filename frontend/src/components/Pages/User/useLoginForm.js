import { useState } from 'react';

const useLoginForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	return {
		name,
		email,
		password,
		showPassword,
		setName,
		setEmail,
		setPassword,
		setShowPassword,
	};
};

export default useLoginForm;
