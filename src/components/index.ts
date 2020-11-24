import usersRoutes from './geo/routes';
import healthRoutes from './healthcheck/routes';

export default [...usersRoutes, ...healthRoutes];
