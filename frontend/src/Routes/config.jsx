import Home from '@components/Pages/Home';
import ProductDetails from '@components/Pages/ProductDetails';
import ProductSearch from '@components/Pages/ProductSearch';
import Smartphones from '@components/Pages/SmartPhones';
import Tablets from '@components/Pages/Tables';
import Login from '@components/Pages/User/Login';
import Register from '@components/Pages/User/Register';
import Logout from '@components/Pages/User/Logout';
import MyPage from '@components/Pages/User/MyPage';
import ProtectedRoute from '@components/Route/ProtectedRoute';
import UpdateProfile from '@components/Pages/User/UpdateProfile';
import UpdatePassword from '@components/Pages/User/UpdatePassword';
import ForgetPassword from '@components/Pages/User/ForgetPassword';
import ResetPassword from '@components/Pages/User/ResetPassword';
import Cart from '@components/Pages/Cart';
import Checkout from '@components/Pages/Checkout/Index';
import NotFound from '@components/NotFound';

export const routesConfig = [
	{ path: '/', element: <Home/> },
	{ path: '/product/:id', element: <ProductDetails/> },
	{ path: '/search/:keyword', element: <ProductSearch/> },
	{ path: '/smartphones', element: <Smartphones/> },
	{ path: '/tablets', element: <Tablets/> },
	{ path: '/login', element: <Login/> },
	{ path: '/register', element: <Register/> },
	{ path: '/logout', element: <Logout/> },
	{ path: '/myPage', element: <ProtectedRoute><MyPage/></ProtectedRoute> },
	{ path: '/updateProfile', element: <ProtectedRoute><UpdateProfile/></ProtectedRoute> },
	{ path: '/updatePassword', element: <ProtectedRoute><UpdatePassword/></ProtectedRoute> },
	{ path: '/password/forget', element: <ForgetPassword/> },
	{ path: '/password/reset/:token', element: <ResetPassword/> },
	{ path: '/cart', element: <Cart/> },
	{ path: '/checkout', element: <ProtectedRoute><Checkout/></ProtectedRoute> },
	{ path: '*', element: <NotFound/> },
];
