"use strict";

class Driver {
  constructor(id, driverName, number, pos, country, teamId, pts) {
    this._id = id;
    this._driverName = driverName;
    this._number = number;
    this._pos = pos;
    this._country = country;
    this._teamId = teamId;
    this._pts = pts;
  }

  getId() {
    return this._id;
  }

  getDriverName() {
    return this._driverName;
  }

  getNumber() {
    return this._number;
  }

  getPosition() {
    return this._pos;
  }

  getCountry() {
    return this._country;
  }

  getTeamId() {
    return this._teamId;
  }

  getPoints() {
    return this._pts;
  }

  static createDriver(id, driverName, number, pos, country, teamId, pts) {
    return new Driver(id, driverName, number, pos, country, teamId, pts);
  }
}
