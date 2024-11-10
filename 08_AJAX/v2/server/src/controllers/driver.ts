import { Request, Response } from 'express';
import { getAllDrivers, getDriverById, getDriversByTeamId } from '../services/driver';
import { Driver } from '../types/driver';

export function getDrivers(request: Request, response: Response<Driver[] | []>) {
    const drivers: Driver[] | [] = getAllDrivers();
    if (drivers.length) return response.status(200).send(drivers);
    return response.status(204).send(drivers);
}

export function getDriver(request: Request, response: Response<Driver | []>) {
    const driverId: number = parseInt(request.params.driver_id);
    const driver: Driver | [] = getDriverById(driverId);
    if (driver) return response.status(200).send(driver);
    return response.status(204).send(driver);
}

export function getDriversByTeam(request: Request, response: Response<Driver[] | []>) {
    const teamId: number = parseInt(request.params.team_id);
    const drivers: Driver[] | [] = getDriversByTeamId(teamId);
    if (drivers) return response.status(200).send(drivers);
    return response.status(204).send(drivers);
}
