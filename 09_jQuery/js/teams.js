// Team functions
function populateTeamsSelectList(teamSelect, teams) {
  // Create Team Options
  teams.forEach((team) => {
    teamSelect.append(
      $("<option/>").attr({ value: team.getId() }).text(team.getTeamName())
    );
  });
}

function displayTeamSection(teamRow, team) {
  teamRow.empty();

  const baseImgPath = "img/teams";
  const teamName = team.getTeamName();
  const carImageFile = teamName.toLowerCase().replace(" ", "-");

  // Display Team Data
  teamRow.append(
    $("<div/>").attr({ class: "col-md-4" })
      .append(
        $("<div/>").attr({ class: "card" })
          .append(
            $("<img/>").attr(
              {
                class: "card-img-top",
                src: `${baseImgPath}/cars/${carImageFile}.png`,
                alt: teamName,
                id: "team-car"
              }
            )
          )
          .append(
            $("<div/>").attr(
              {
                class: "card-body",
                id: "team-info-div"
              }
            )
              .append($("<h4/>").attr({ class: "card-title" })
                .append(
                  $("<img/>").attr(
                    {
                      src: `${baseImgPath}/logos/${carImageFile}.png`,
                      alt: teamName,
                      id: "team-logo"
                    }
                  )
                )
                .append(
                  $("<span/>").attr(
                    {
                      alt: teamName,
                      id: "team-name"
                    }
                  ).text(teamName)
                ))
              .append($("<br/>"))
              .append(
                $("<span/>").attr(
                  {
                    class: "team-info"
                  }
                ).text("Base: ")
              )
              .append(
                $("<span/>").attr(
                  {
                    id: "team-base"
                  }
                ).text(team.getBase())
              )
              .append($("<br/>"))
              .append(
                $("<span/>").attr(
                  {
                    class: "team-info"
                  }
                ).text("Team Principal: ")
              )
              .append(
                $("<span/>").attr(
                  {
                    id: "team-principal"
                  }
                ).text(team.getTeamPrincipal())
              )
              .append($("<br/>"))
              .append(
                $("<span/>").attr(
                  {
                    class: "team-info"
                  }
                ).text("Chassis: ")
              )
              .append(
                $("<span/>").attr(
                  {
                    id: "team-chassis"
                  }
                ).text(team.getChassis())
              )
              .append($("<br/>"))
              .append(
                $("<span/>").attr(
                  {
                    class: "team-info"
                  }
                ).text("Power Unit: ")
              )
              .append(
                $("<span/>").attr(
                  {
                    id: "team-power-unit"
                  }
                ).text(team.getPowerUnit())
              )
              .append($("<br/>"))
              .append(
                $("<span/>").attr(
                  {
                    class: "team-info"
                  }
                ).text("Position: ")
              )
              .append(
                $("<span/>").attr(
                  {
                    id: "team-position"
                  }
                ).text(team.getPosition())
              )
              .append($("<br/>"))
              .append(
                $("<span/>").attr(
                  {
                    class: "team-info"
                  }
                ).text("Points: ")
              )
              .append(
                $("<span/>").attr(
                  {
                    id: "team-points"
                  }
                ).text(team.getPoints())
              )
          )
      )
  );

  // Show Team Section
  teamRow.removeClass("hide");
}

function hideTeamRow(teamRow) {
  // Clear Team Display Data
  teamRow.empty();

  // Hide Team Section
  teamRow.addClass("hide");
}
