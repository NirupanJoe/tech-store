import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(<StrictMode>
	<Provider store={ store }>
		<BrowserRouter>
			<HelmetProvider>
				<App/>
			</HelmetProvider>
		</BrowserRouter>
	</Provider>
</StrictMode>);
