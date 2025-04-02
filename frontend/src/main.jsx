import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store.js';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(<StrictMode>
	<Provider store={ store }>
		<BrowserRouter>
			<HelmetProvider>
				<GoogleOAuthProvider clientId={ import.meta.env.VITE_GOOGLE_CLIENT_ID }>
					<App/>
				</GoogleOAuthProvider>
			</HelmetProvider>
		</BrowserRouter>
	</Provider>
</StrictMode>);
