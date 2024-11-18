"use strict";

class Driver {
  constructor(id, teamId, driverName, number, pos, country, pts) {
    this._id = id;
    this._teamId = teamId;
    this._driverName = driverName;
    this._number = number;
    this._pos = pos;
    this._country = country;
    this._pts = pts;
  }

  getId() {
    return this._id;
  }

  getTeamId() {
    return this._teamId;
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

  getPoints() {
    return this._pts;
  }

  static createDriver(id, teamId, driverName, number, pos, country, pts) {
    return new Driver(id, teamId, driverName, number, pos, country, pts);
  }
}
