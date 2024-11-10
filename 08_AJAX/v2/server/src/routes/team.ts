import { Router } from 'express';
import { getTeams, getTeam } from '../controllers/team';

const teamRouter = Router();

teamRouter.get('/', getTeams);
teamRouter.get('/:team_id', getTeam);

export default teamRouter;
