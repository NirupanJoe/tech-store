/* eslint-disable max-lines-per-function */
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
import Logout from './components/Pages/User/Logout';
import MyPage from './components/Pages/User/MyPage';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/Pages/User/UpdateProfile';
import UpdatePassword from './components/Pages/User/UpdatePassword';
import ForgetPassword from './components/Pages/User/ForgetPassword';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

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
			<Route path="/logout" element={ <Logout/> }/>
			<Route path="/myPage" element={ <ProtectedRoute><MyPage/></ProtectedRoute> }/>
			<Route
				path="/updateProfile"
				element={ <ProtectedRoute>
					<UpdateProfile/></ProtectedRoute> }
			/>
			<Route
				path="/updatePassword"
				element={ <ProtectedRoute>
					<UpdatePassword/></ProtectedRoute> }
			/>
			<Route path="/password/forget" element={ <ForgetPassword/> }/>
		</Routes>
		<Footer/>
	</div>;
};

export default App;
