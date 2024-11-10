const fs = require('fs');
import { Driver } from '../types/driver';

const DRIVER_DATA_FILE: string | void = process.env.DRIVER_DATA_FILE;
let DRIVERS: Driver[] = [];

const getDrivers = (): void => {
    try {
        const driverData = fs.readFileSync(DRIVER_DATA_FILE);
        DRIVERS = JSON.parse(driverData);
    } catch (err) {
        console.log(`Error loading drivers from ${DRIVER_DATA_FILE}`);
    }
};

export function getAllDrivers(): Driver[] | [] {
    if (!DRIVERS.length) getDrivers();
    return DRIVERS;
}

export function getDriverById(driverId: number): Driver | [] {
    if (!DRIVERS.length) getDrivers();
    let filteredDriver = DRIVERS.filter((driver) => driver.id === driverId);
    if (filteredDriver.length == 1) {
        return filteredDriver[0];
    } else {
        return [];
    }
}

export function getDriversByTeamId(teamId: number): Driver[] | [] {
    if (!DRIVERS.length) getDrivers();
    let filteredDrivers = DRIVERS.filter((driver) => driver.teamId === teamId);
    if (filteredDrivers.length == 2) {
        return filteredDrivers;
    } else {
        return [];
    }
}
