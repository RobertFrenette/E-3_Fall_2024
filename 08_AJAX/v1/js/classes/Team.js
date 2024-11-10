"use strict";

class Team {
  constructor(id, teamName, base, teamPrincipal, chassis, powerUnit, pos, pts) {
    this._id = id;
    this._teamName = teamName;
    this._base = base;
    this._teamPrincipal = teamPrincipal;
    this._chassis = chassis;
    this._powerUnit = powerUnit;
    this._pos = pos;
    this._pts = pts;
    this._drivers = [];
  }

  getId() {
    return this._id;
  }

  getTeamName() {
    return this._teamName;
  }

  getBase() {
    return this._base;
  }

  getTeamPrincipal() {
    return this._teamPrincipal;
  }

  getChassis() {
    return this._chassis;
  }

  getPowerUnit() {
    return this._powerUnit;
  }

  getPosition() {
    return this._pos;
  }

  getPoints() {
    return this._pts;
  }

  getDrivers() {
    return this._drivers;
  }

  setDriver(driver) {
    this._drivers.push(driver);
  }

  static createTeam(
    id,
    teamName,
    base,
    teamPrincipal,
    chassis,
    powerUnit,
    pos,
    pts
  ) {
    return new Team(
      id,
      teamName,
      base,
      teamPrincipal,
      chassis,
      powerUnit,
      pos,
      pts
    );
  }
}
