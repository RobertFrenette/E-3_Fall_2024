import { Router } from 'express';
import { getDrivers, getDriver, getDriversByTeam } from '../controllers/driver';

const driverRouter = Router();

driverRouter.get('/', getDrivers);
driverRouter.get('/:driver_id', getDriver);
driverRouter.get('/team/:team_id', getDriversByTeam);

export default driverRouter;
