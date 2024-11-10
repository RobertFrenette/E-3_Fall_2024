const fs = require('fs');
import { Team } from '../types/team';

const TEAM_DATA_FILE: string | void = process.env.TEAM_DATA_FILE;
let TEAMS: Team[] = [];

const getTeams = (): void => {
    try {
        const teamData = fs.readFileSync(TEAM_DATA_FILE);
        TEAMS = JSON.parse(teamData);
    } catch (err) {
        console.log(`Error loading teams from ${TEAM_DATA_FILE}`);
    }
};

export function getAllTeams(): Team[] | [] {
    if (!TEAMS.length) getTeams();
    return TEAMS;
}

export function getTeamById(teamId: number): Team | [] {
    if (!TEAMS.length) getTeams();
    let filteredTeam = TEAMS.filter((team) => team.id === teamId);
    if (filteredTeam.length == 1) {
        return filteredTeam[0];
    } else {
        return [];
    }
}
