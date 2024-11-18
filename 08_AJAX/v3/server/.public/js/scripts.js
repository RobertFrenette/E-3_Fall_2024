"use strict";

// Init page
async function init(teams, teamSelect) {
  try {
    await getTeams(teams);
    populateTeamsSelectList(teamSelect, teams);
  } catch (err) {
    console.log(
      "Error getting Teams data. Please be sure the Node.js Server is running."
    );
    console.log(err);
  }
}

window.onload = function () {
  // Array to hold Teams Data
  const teams = [];

  // DOM Elements
  const teamSelect = document.getElementById("team-select");
  const teamRow = document.getElementById("team-row");

  const driverSelect = document.getElementById("driver-select");
  const driverSection = document.getElementById("driver-section");
  const driverRow = document.getElementById("driver-row");

  // Bind Event Listeners
  teamSelect.addEventListener("change", (evt) => {
    const teamIndex = parseInt(evt.target.value);
    if (teamIndex > 0) {
      const teamIdIndx = teamIndex - 1;
      hideDriverRow(driverRow);
      displayTeamSection(teamRow, teams[teamIdIndx]);
      populateDriverSelect(driverSelect, teams[teamIdIndx]);
      displayDriverSection(driverSection);
    } else {
      hideDriverSection(driverSection, driverRow);
      hideTeamRow(teamRow);
    }
  });

  driverSelect.addEventListener("change", (evt) => {
    const driverSelectValue = evt.target.value;
    if (driverSelectValue.length > 0) {
      const comma = driverSelectValue.indexOf(",");
      const teamId = parseInt(driverSelectValue.substring(0, comma));
      const driverId = driverSelectValue.substring(comma + 1);
      const drivers = teams[teamId - 1].getDrivers();
      const driver = drivers.filter((d) => d.getId() === driverId);
      displayDriverRow(driverRow, driver[0]);
    } else {
      hideDriverRow(driverRow);
    }
  });

  init(teams, teamSelect);
};
