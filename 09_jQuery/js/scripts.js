"use strict";

// Init page
function init(teams, teamSelect) {
  // 1. Call loadData() to get Teams from a JSON file, and wait for response
  // 2. Then iterate through teamsData Array returned from loadData()
  // 3. For each element in the teamsData Array, instantiate a new Team Object,
  //    and put it in the teams Array.
  loadData("teams")
    .then((teamsData) => {
      teamsData.forEach((team) => {
        teams.push(
          Team.createTeam(
            team.id,
            team.teamName,
            team.base,
            team.teamPrincipal,
            team.chassis,
            team.powerUnit,
            team.pos,
            team.pts
          )
        );
      });
      populateTeamsSelectList(teamSelect, teams);
    })
    .catch((error) => {
      // Handle error returned from getData()
      console.error("Error loading Teams data.");
    });
}

window.onload = function () {
  // Array to hold Teams Data
  const teams = [];

  // DOM Elements
  const teamSelect = $("#team-select");
  const teamRow = $("#team-row");

  const driverSelect = $("#driver-select");
  const driverSection = $("#driver-section");
  const driverRow = $("#driver-row");

  // Bind Event Listeners
  teamSelect.change((evt) => {
    const teamIndex = parseInt(evt.target.value);
    if (teamIndex >= 0) {
      hideDriverRow(driverRow);
      displayTeamSection(teamRow, teams[teamIndex]);
      populateDriverSelect(driverSelect, teams[teamIndex]);
      displayDriverSection(driverSection);
    } else {
      hideDriverSection(driverSection, driverRow);
      hideTeamRow(teamRow);
    }
  });

  driverSelect.change((evt) => {
    const driverSelectValue = evt.target.value;
    if (driverSelectValue.length > 0) {
      const comma = driverSelectValue.indexOf(",");
      const teamId = parseInt(driverSelectValue.substring(0, comma));
      const driverId = parseInt(driverSelectValue.substring(comma + 1));
      const drivers = teams[teamId].getDrivers();
      const driver = drivers.filter((d) => d.getId() === driverId);
      displayDriverRow(driverRow, driver[0]);
    } else {
      hideDriverRow(driverRow);
    }
  });

  init(teams, teamSelect);
};
