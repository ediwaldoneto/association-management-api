import restify from 'restify';
import { connectDB } from './utils/Database';
import { Environment } from './utils/common/Environment';
import { registerBeneficiaryRoutes } from './routes/BeneficiaryRoutes';
import { registerDependentRoutes } from './routes/DependentRoutes';
import { registerBeneficiaryWithDependentsRoutes } from './routes/BeneficiaryWithDependentsRoutes';
import { registerVolunteerRoutes } from './routes/VolunteerRoutes';

import logger from './utils/Logger';
import { registerServiceRoutes } from './routes/ServiceRoutes';

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

connectDB();

registerBeneficiaryRoutes(server);
registerDependentRoutes(server);
registerBeneficiaryWithDependentsRoutes(server);
registerVolunteerRoutes(server);
registerServiceRoutes(server);


server.listen(Environment.server, () => {
    logger.info(`Server is listening on port: ${Environment.server.port}`);
});
