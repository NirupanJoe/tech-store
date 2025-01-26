import { useRoutes } from 'react-router-dom';
import { routesConfig } from './config';

const Routes = () => {
	const routes = useRoutes(routesConfig);

	return routes;
};

export default Routes;
