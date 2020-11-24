import geoRoutes from './geo/routes';
import healthRoutes from './healthcheck/routes';

export default [...geoRoutes, ...healthRoutes];
