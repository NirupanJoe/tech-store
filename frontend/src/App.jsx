import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/Pages/ProductDetails';

const App = () =>
	<div>
		<Header/>
		<Routes>
			<Route path="/" element={ <Home/> }/>
			<Route path="/product/:id" element={ <ProductDetails/> }/>
		</Routes>
		<Footer/>
	</div>;

export default App;
