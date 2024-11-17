import { useState } from 'react';

const useLoginForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return {
		name,
		email,
		password,
		oldPassword,
		confirmPassword,
		setName,
		setEmail,
		setOldPassword,
		setPassword,
		setConfirmPassword,
	};
};

export default useLoginForm;
