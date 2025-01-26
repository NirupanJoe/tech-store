import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Footer from './components/Footer';
import Header from './components/Header';
import { loadUser } from './actions/authActions';
import Routes from './Routes';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	return <div>
		<Header/>
		<ToastContainer theme="dark"/>
		<Routes/>
		<Footer/>
	</div>;
};

export default App;
