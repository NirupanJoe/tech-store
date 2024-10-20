import { useState } from 'react';

const useLoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	return {
		email,
		password,
		showPassword,
		setEmail,
		setPassword,
		setShowPassword,
	};
};

export default useLoginForm;
