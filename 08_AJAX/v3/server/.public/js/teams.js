// Team functions
async function getTeams(teams) {
  // Fetch Teams from external API (json-server)
  const teamsResp = await fetch("http://localhost:3000/teams?_embed=drivers");
  if (!teamsResp.ok) throw new Error();
  const teamsJson = await teamsResp.json();

  let newTeam = {};

  teamsJson.forEach((team) => {
    newTeam = Team.createTeam(
      team.id,
      team.teamName,
      team.base,
      team.teamPrincipal,
      team.chassis,
      team.powerUnit,
      team.pos,
      team.pts
    );

    team.drivers.forEach((driver) => {
      newTeam.setDriver(
        Driver.createDriver(
          driver.id,
          driver.teamId,
          driver.driverName,
          driver.driverNumber,
          driver.driverPos,
          driver.country,
          driver.pts
        )
      );
    });

    teams.push(newTeam);
  });

  console.log(teams);
}

function displayTeamSection(teamRow, team) {
  teamRow.innerHTML = "";

  const baseImgPath = "img/teams";
  const teamName = team.getTeamName();
  const carImageFile = teamName.toLowerCase().replace(" ", "-");

  // Display Team Data
  const outerTeamDiv = document.createElement("div");
  outerTeamDiv.setAttribute("class", "col-md-4");

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const teamCarImg = document.createElement("img");
  teamCarImg.setAttribute("class", "card-img-top");
  teamCarImg.setAttribute("src", `${baseImgPath}/cars/${carImageFile}.png`);
  teamCarImg.setAttribute("alt", teamName);
  teamCarImg.setAttribute("id", "team-car");

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  cardBody.setAttribute("id", "team-info-div");

  const cardTitle = document.createElement("h4");
  cardTitle.setAttribute("class", "card-title");

  const teamLogoImg = document.createElement("img");
  teamLogoImg.setAttribute("src", `${baseImgPath}/logos/${carImageFile}.png`);
  teamLogoImg.setAttribute("alt", teamName);
  teamLogoImg.setAttribute("id", "team-logo");

  const teamNameSpan = document.createElement("span");
  teamNameSpan.setAttribute("id", "team-name");
  teamNameSpan.appendChild(document.createTextNode(teamName));

  const teamBaseInfoSpanBr = document.createElement("br");
  const teamBaseInfoSpan = document.createElement("span");
  teamBaseInfoSpan.setAttribute("class", "team-info");
  teamBaseInfoSpan.appendChild(document.createTextNode("Base: "));
  const teamBaseSpan = document.createElement("span");
  teamBaseSpan.setAttribute("id", "team-base");
  teamBaseSpan.appendChild(document.createTextNode(team.getBase()));

  const teamPrincipalInfoSpanBr = document.createElement("br");
  const teamPrincipalInfoSpan = document.createElement("span");
  teamPrincipalInfoSpan.setAttribute("class", "team-info");
  teamPrincipalInfoSpan.appendChild(
    document.createTextNode("Team Principal: ")
  );
  const teamPrincipalSpan = document.createElement("span");
  teamPrincipalSpan.setAttribute("id", "team-principal");
  teamPrincipalSpan.appendChild(
    document.createTextNode(team.getTeamPrincipal())
  );

  const teamChassisInfoSpanBr = document.createElement("br");
  const teamChassisInfoSpan = document.createElement("span");
  teamChassisInfoSpan.setAttribute("class", "team-info");
  teamChassisInfoSpan.appendChild(document.createTextNode("Chassis: "));
  const teamChassisSpan = document.createElement("span");
  teamChassisSpan.setAttribute("id", "team-chassis");
  teamChassisSpan.appendChild(document.createTextNode(team.getChassis()));

  const teamPowerUnitInfoSpanBr = document.createElement("br");
  const teamPowerUnitInfoSpan = document.createElement("span");
  teamPowerUnitInfoSpan.setAttribute("class", "team-info");
  teamPowerUnitInfoSpan.appendChild(document.createTextNode("Power Unit: "));
  const teamPowerUnitSpan = document.createElement("span");
  teamPowerUnitSpan.setAttribute("id", "team-power-unit");
  teamPowerUnitSpan.appendChild(document.createTextNode(team.getPowerUnit()));

  const teamPositionInfoSpanBr = document.createElement("br");
  const teamPositionInfoSpan = document.createElement("span");
  teamPositionInfoSpan.setAttribute("class", "team-info");
  teamPositionInfoSpan.appendChild(document.createTextNode("Position: "));
  const teamPositionSpan = document.createElement("span");
  teamPositionSpan.setAttribute("id", "team-position");
  teamPositionSpan.appendChild(document.createTextNode(team.getPosition()));

  const teamPointsInfoSpanBr = document.createElement("br");
  const teamPointsInfoSpan = document.createElement("span");
  teamPointsInfoSpan.setAttribute("class", "team-info");
  teamPointsInfoSpan.appendChild(document.createTextNode("Points: "));
  const teamPointsSpan = document.createElement("span");
  teamPointsSpan.setAttribute("id", "team-points");
  teamPointsSpan.appendChild(document.createTextNode(team.getPoints()));

  cardTitle.appendChild(teamLogoImg);
  cardTitle.appendChild(teamNameSpan);
  cardBody.appendChild(cardTitle);

  cardBody.appendChild(teamBaseInfoSpanBr);
  cardBody.appendChild(teamBaseInfoSpan);
  cardBody.appendChild(teamBaseSpan);
  cardBody.appendChild(teamPrincipalInfoSpanBr);
  cardBody.appendChild(teamPrincipalInfoSpan);
  cardBody.appendChild(teamPrincipalSpan);
  cardBody.appendChild(teamChassisInfoSpanBr);
  cardBody.appendChild(teamChassisInfoSpan);
  cardBody.appendChild(teamChassisSpan);
  cardBody.appendChild(teamPowerUnitInfoSpanBr);
  cardBody.appendChild(teamPowerUnitInfoSpan);
  cardBody.appendChild(teamPowerUnitSpan);
  cardBody.appendChild(teamPositionInfoSpanBr);
  cardBody.appendChild(teamPositionInfoSpan);
  cardBody.appendChild(teamPositionSpan);
  cardBody.appendChild(teamPointsInfoSpanBr);
  cardBody.appendChild(teamPointsInfoSpan);
  cardBody.appendChild(teamPointsSpan);

  card.appendChild(teamCarImg);
  card.appendChild(cardBody);

  outerTeamDiv.appendChild(card);
  teamRow.appendChild(outerTeamDiv);

  // Show Team Section
  teamRow.classList.remove("hide");
}

function populateTeamsSelectList(teamSelect, teams) {
  // Create Team Options
  teams.forEach((team) => {
    const teamSelectOption = document.createElement("option");
    const teamSelectOptionText = document.createTextNode(team.getTeamName());
    teamSelectOption.appendChild(teamSelectOptionText);
    teamSelectOption.setAttribute("value", team.getId());
    teamSelect.appendChild(teamSelectOption);
  });
}

function hideTeamRow(teamRow) {
  // Clear Team Display Data
  teamRow.innerHTML = "";

  // Hide Team Section
  teamRow.classList.add("hide");
}
