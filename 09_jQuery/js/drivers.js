// Driver functions
function getDriversForTeam(team, driverSelect) {
  let drivers = team.getDrivers();

  // 1. Call loadData() to get Drivers from a JSON file, and wait for response
  // 2. Then iterate through driversData Array returned from loadData()
  // 3. For each element in the driversData Array (2 Drivers),
  //    instantiate a new Driver Object, and pass the Driver Object
  //    as a param to the Team's setDriver() method
  loadData("drivers")
    .then((driversData) => {
      driversData.forEach((driver) => {
        if (driver.teamId === team.getId()) {
          team.setDriver(
            Driver.createDriver(
              driver.id,
              driver.driverName,
              driver.driverNumber,
              driver.driverPos,
              driver.country,
              driver.teamId,
              driver.pts
            )
          );
        }
      });

      team.getDrivers().forEach((driver) => {
        addDriverOption(
          driverSelect,
          driver.getDriverName(),
          driver.getId(),
          team.getId()
        );
      });
    })
    .catch((error) => {
      // Handle error returned from getData()
      console.error("Error loading Drivers data.");
    });
}

function addDriverOption(driverSelect, driverName, driverId, teamId) {
  driverSelect.append(
    $("<option/>")
      .attr({ value: [teamId, driverId] })
      .text(driverName)
  );
}

function populateDriverSelect(driverSelect, team) {
  driverSelect.empty();

  // "Select a Driver" Option
  driverSelect.append(
    $("<option/>").attr({ value: "" }).text("Select a Driver")
  );

  // Create Driver Options
  const drivers = team.getDrivers();
  if (drivers.length == 0) {
    console.log("Getting Drivers from file");
    getDriversForTeam(team, driverSelect);
  } else {
    console.log("Drivers already added to Team.");

    drivers.forEach((driver) => {
      addDriverOption(
        driverSelect,
        driver.getDriverName(),
        driver.getId(),
        team.getId()
      );
    });
  }
}

function displayDriverSection(driverSection) {
  // Show Driver Section
  driverSection.removeClass("hide");
}

function displayDriverRow(driverRow, driver) {
  driverRow.empty();

  const baseImgPath = "img/drivers";
  const driverName = driver.getDriverName();
  const driverImageFile = driverName
    .toLowerCase()
    .substring(0, driverName.indexOf(" "));

  // Display Driver Data
  driverRow.append(
    $("<div/>")
      .attr({ class: "col-md-4" })
      .append(
        $("<div/>")
          .attr({ class: "card" })
          .append(
            $("<img/>").attr({
              class: "card-img-top",
              src: `${baseImgPath}/pics/${driverImageFile}.png`,
              alt: driverName,
              id: "driver-pic",
            })
          )
          .append(
            $("<div/>")
              .attr({
                class: "card-body",
                id: "driver-info-div",
              })
              .append(
                $("<h4/>")
                  .attr({ class: "card-title" })
                  .append(
                    $("<img/>").attr({
                      src: `${baseImgPath}/helmets/${driverImageFile}.png`,
                      alt: driverName,
                      id: "driver-helmet",
                    })
                  )
                  .append(
                    $("<span/>")
                      .attr({
                        id: "driver-name",
                      })
                      .text(driverName)
                  )
                  .append($("<br/>"))
                  .append(
                    $("<span/>")
                      .attr({
                        id: "driver-number",
                      })
                      .text(`# ${driver.getNumber()}`)
                  )
              )
              .append($("<br/>"))
              .append(
                $("<span/>")
                  .attr({
                    class: "driver-info",
                  })
                  .text("Country: ")
              )
              .append(
                $("<span/>")
                  .attr({
                    id: "driver-country",
                  })
                  .text(driver.getCountry())
              )
              .append($("<br/>"))
              .append(
                $("<span/>")
                  .attr({
                    class: "driver-info",
                  })
                  .text("Position: ")
              )
              .append(
                $("<span/>")
                  .attr({
                    id: "driver-position",
                  })
                  .text(driver.getPosition())
              )
              .append($("<br/>"))
              .append(
                $("<span/>")
                  .attr({
                    class: "driver-info",
                  })
                  .text("Points: ")
              )
              .append(
                $("<span/>")
                  .attr({
                    id: "driver-points",
                  })
                  .text(driver.getPoints())
              )
          )
      )
  );

  // Show Driver Row
  driverRow.removeClass("hide");
}

function hideDriverRow(driverRow) {
  // Clear Driver Display Data
  driverRow.empty();

  // Hide Driver Section
  driverRow.addClass("hide");
}

function hideDriverSection(driverSection, driverRow) {
  // Clear Driver Display Data
  hideDriverRow(driverRow);

  // Hide Driver Section
  driverSection.addClass("hide");
}
