import { Request, Response } from 'express';
import { getAllTeams, getTeamById } from '../services/team';
import { Team } from '../types/team';

export function getTeams(request: Request, response: Response<Team[] | []>) {
    const teams: Team[] | [] = getAllTeams();
    if (teams.length) return response.status(200).send(teams);
    return response.status(204).send(teams);
}

export function getTeam(request: Request, response: Response<Team | []>) {
    const teamId: number = parseInt(request.params.team_id);
    const team: Team | [] = getTeamById(teamId);
    if (team) return response.status(200).send(team);
    return response.status(204).send(team);
}
