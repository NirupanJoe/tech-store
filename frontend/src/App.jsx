import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/Pages/ProductDetails';
import ProductSearch from './components/Pages/ProductSearch';
import Smartphones from './components/Pages/SmartPhones';
import Tablets from './components/Pages/Tables';
import Login from './components/Pages/User/Login';
import Register from './components/Pages/User/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/authActions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, []);

	return <div>
		<Header/>
		<Routes>
			<Route path="/" element={ <Home/> }/>
			<Route path="/product/:id" element={ <ProductDetails/> }/>
			<Route path="/search/:keyword" element={ <ProductSearch/> }/>
			<Route path="/smartphones" element={ <Smartphones/> }/>
			<Route path="/tablets" element={ <Tablets/> }/>
			<Route path="/login" element={ <Login/> }/>
			<Route path="/register" element={ <Register/> }/>
		</Routes>
		<Footer/>
	</div>;
};

export default App;
