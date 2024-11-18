// Driver functions
function populateDriverSelect(driverSelect, team) {
  console.log(team);
  driverSelect.innerHTML = "";

  // "Select a Driver" Option
  const driverSelectDefaultOption = document.createElement("option");
  const driverSelectDefaultOptionText =
    document.createTextNode("Select a Driver");
  driverSelectDefaultOption.appendChild(driverSelectDefaultOptionText);
  driverSelectDefaultOption.setAttribute("value", "");
  driverSelect.appendChild(driverSelectDefaultOption);

  const drivers = team.getDrivers();
  console.log(drivers);

  drivers.forEach((driver) => {
    const driverSelectOption = document.createElement("option");
    const driverSelectOptionText = document.createTextNode(
      driver.getDriverName()
    );
    driverSelectOption.appendChild(driverSelectOptionText);
    driverSelectOption.setAttribute("value", [team.getId(), driver.getId()]);
    driverSelect.appendChild(driverSelectOption);
  });
}

function displayDriverSection(driverSection) {
  // Show Driver Section
  driverSection.classList.remove("hide");
}

function displayDriverRow(driverRow, driver) {
  console.log(driver);

  driverRow.innerHTML = "";

  const baseImgPath = "img/drivers";
  const driverName = driver.getDriverName();
  const driverImageFile = driverName
    .toLowerCase()
    .substring(0, driverName.indexOf(" "));

  // Display Driver Data
  const outerDriverDiv = document.createElement("div");
  outerDriverDiv.setAttribute("class", "col-md-4");

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const driverImg = document.createElement("img");
  driverImg.setAttribute("class", "card-img-top");
  driverImg.setAttribute("src", `${baseImgPath}/pics/${driverImageFile}.png`);
  driverImg.setAttribute("alt", driverName);
  driverImg.setAttribute("id", "driver-pic");

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  cardBody.setAttribute("id", "driver-info-div");

  const cardTitle = document.createElement("h4");
  cardTitle.setAttribute("class", "card-title");

  const driverHelmetImg = document.createElement("img");
  driverHelmetImg.setAttribute(
    "src",
    `${baseImgPath}/helmets/${driverImageFile}.png`
  );
  driverHelmetImg.setAttribute("alt", driverName);
  driverHelmetImg.setAttribute("id", "driver-helmet");

  const driverNameSpan = document.createElement("span");
  driverNameSpan.setAttribute("id", "driver-name");
  driverNameSpan.appendChild(document.createTextNode(driverName));

  const driverNumberBr = document.createElement("br");
  const driverNumberSpan = document.createElement("span");
  driverNumberSpan.setAttribute("id", "driver-number");
  driverNumberSpan.appendChild(
    document.createTextNode(`# ${driver.getNumber()}`)
  );

  const driverCountryInfoSpanBr = document.createElement("br");
  const driverCountryInfoSpan = document.createElement("span");
  driverCountryInfoSpan.setAttribute("class", "driver-info");
  driverCountryInfoSpan.appendChild(document.createTextNode("Country: "));
  const driverCountrySpan = document.createElement("span");
  driverCountrySpan.setAttribute("id", "driver-country");
  driverCountrySpan.appendChild(document.createTextNode(driver.getCountry()));

  const driverPositionInfoSpanBr = document.createElement("br");
  const driverPositionInfoSpan = document.createElement("span");
  driverPositionInfoSpan.setAttribute("class", "driver-info");
  driverPositionInfoSpan.appendChild(document.createTextNode("Position: "));
  const driverPositionSpan = document.createElement("span");
  driverPositionSpan.setAttribute("id", "driver-position");
  driverPositionSpan.appendChild(document.createTextNode(driver.getPosition()));

  const driverPointsInfoSpanBr = document.createElement("br");
  const driverPointsInfoSpan = document.createElement("span");
  driverPointsInfoSpan.setAttribute("class", "driver-info");
  driverPointsInfoSpan.appendChild(document.createTextNode("Points: "));
  const driverPointsSpan = document.createElement("span");
  driverPointsSpan.setAttribute("id", "driver-points");
  driverPointsSpan.appendChild(document.createTextNode(driver.getPoints()));

  cardTitle.appendChild(driverHelmetImg);
  cardTitle.appendChild(driverNameSpan);
  cardTitle.appendChild(driverNumberBr);
  cardTitle.appendChild(driverNumberSpan);
  cardBody.appendChild(cardTitle);

  cardBody.appendChild(driverCountryInfoSpanBr);
  cardBody.appendChild(driverCountryInfoSpan);
  cardBody.appendChild(driverCountrySpan);
  cardBody.appendChild(driverPositionInfoSpanBr);
  cardBody.appendChild(driverPositionInfoSpan);
  cardBody.appendChild(driverPositionSpan);
  cardBody.appendChild(driverPointsInfoSpanBr);
  cardBody.appendChild(driverPointsInfoSpan);
  cardBody.appendChild(driverPointsSpan);

  card.appendChild(driverImg);
  card.appendChild(cardBody);

  outerDriverDiv.appendChild(card);
  driverRow.appendChild(outerDriverDiv);

  // Show Driver Row
  driverRow.classList.remove("hide");
}

function hideDriverRow(driverRow) {
  // Clear Driver Display Data
  driverRow.innerHTML = "";

  // Hide Driver Section
  driverRow.classList.add("hide");
}

function hideDriverSection(driverSection, driverRow) {
  // Clear Driver Display Data
  hideDriverRow(driverRow);

  // Hide Driver Section
  driverSection.classList.add("hide");
}
