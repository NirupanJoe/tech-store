import { useState } from 'react';

const useLoginForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [password, setPassword] = useState('');

	return {
		name,
		email,
		password,
		oldPassword,
		setName,
		setEmail,
		setOldPassword,
		setPassword,
	};
};

export default useLoginForm;
