// force Strict Mode
"use strict";

/*
 * This code is a bit more 'complex' than what we've covered in the Course thus far,
 * but it's manageable.
 *
 * Also, there's quite a bit of repatitive code in this example. We'll show how to
 * make this code more efficient as the Semester progresses.
 */

window.onload = function () {
  // execute the following code after the page has loaded
  console.log("Page loaded.");

  // Global Vars
  let errorMsgs = [];
  let contacts = [];

  // Form fields
  const contactFNameField = document.getElementById("contactFName");
  const contactLNameField = document.getElementById("contactLName");
  const contactEmailField = document.getElementById("contactEmail");
  const contactPhoneAreaCodeField = document.getElementById(
    "contactPhoneAreaCode"
  );
  const contactPhonePrefixField = document.getElementById("contactPhonePrefix");
  const contactPhoneNumberField = document.getElementById("contactPhoneNumber");
  const contactBirthdayMonthField = document.getElementById(
    "contactBirthdayMonth"
  );
  const contactBirthdayDayField = document.getElementById("contactBirthdayDay");

  // Form Field Values
  let contactFName = "";
  let contactLName = "";
  let contactEmail = "";
  let contactPhoneAreaCode = "";
  let contactPhonePrefix = "";
  let contactPhoneNumber = "";
  let contactBirthdayMonth = "";
  let contactBirthdayDay = "";

  function getFormFieldValues() {
    contactFName = contactFNameField.value.trim();
    contactLName = contactLNameField.value.trim();
    contactEmail = contactEmailField.value.trim();
    contactPhoneAreaCode = contactPhoneAreaCodeField.value.trim();
    contactPhonePrefix = contactPhonePrefixField.value.trim();
    contactPhoneNumber = contactPhoneNumberField.value.trim();
    contactBirthdayMonth = contactBirthdayMonthField.value.trim();
    contactBirthdayDay = contactBirthdayDayField.value.trim();
  }

  function resetFormFieldVarValues() {
    contactFName = "";
    contactLName = "";
    contactEmail = "";
    contactPhoneAreaCode = "";
    contactPhonePrefix = "";
    contactPhoneNumber = "";
    contactBirthdayMonth = "";
    contactBirthdayDay = "";
  }

  function validateName() {
    console.log(`Contact Name: ${contactFName} ${contactLName}`);

    if (contactFName.length === 0 || contactLName.length === 0) {
      // Check if Last Name Field is empty
      if (contactFName.length === 0 && contactLName.length === 0) {
        // Check if both First and Last Name Fields are empty
        errorMsgs.push([
          "First and Last Names are required.",
          contactFNameField,
        ]);
      } else if (contactFName.length === 0) {
        // Check if First Name Field is empty
        errorMsgs.push(["First Name is required.", contactFNameField]);
      } else {
        errorMsgs.push(["Last Name is required.", contactLNameField]);
      }
    }
  }

  function validateEmail() {
    console.log(`Contact Email: ${contactEmail}`);

    if (contactEmail.length === 0) {
      errorMsgs.push(["Email Address is required.", contactEmailField]);
    } else {
      // Email entered, so make sure it's valid
      let hasEmailFormatError = false;
      const emailFormatErrorMsg = "Email Address is invalid.";

      if (!contactEmail.includes("@") || !contactEmail.includes(".")) {
        hasEmailFormatError = true;
      } else if (contactEmail.indexOf(".") !== contactEmail.length - 4) {
        // Make sure the . is in the right position (ex: .com)
        hasEmailFormatError = true;
      }

      if (hasEmailFormatError) {
        errorMsgs.push([emailFormatErrorMsg, contactEmailField]);
      }
    }
  }

  function validatePhone() {
    console.log(
      `Contact Phone: ${contactPhoneAreaCode} - ${contactPhoneNumber} - ${contactPhoneNumber}`
    );

    if (
      contactPhoneAreaCode.length === 0 ||
      contactPhonePrefix.length === 0 ||
      contactPhoneNumber.length === 0
    ) {
      const phoneErrorMsg = "All Phone fields are required.";
      let phoneField = null;

      if (contactPhoneAreaCode.length === 0) {
        phoneField = contactPhoneAreaCodeField;
      } else if (contactPhonePrefix.length === 0) {
        phoneField = contactPhonePrefixField;
      } else {
        phoneField = contactPhoneNumberField;
      }

      errorMsgs.push([phoneErrorMsg, phoneField]);
    } else if (
      isNaN(contactPhoneAreaCode) ||
      isNaN(contactPhonePrefix) ||
      isNaN(contactPhoneNumber)
    ) {
      const phoneFormatErrorMsg = "All Phone fields should be numeric.";
      let phoneField = null;

      if (isNaN(contactPhoneAreaCode)) {
        phoneField = contactPhoneAreaCodeField;
      } else if (isNaN(contactPhonePrefix)) {
        phoneField = contactPhonePrefixField;
      } else {
        phoneField = contactPhoneNumberField;
      }

      errorMsgs.push([phoneFormatErrorMsg, phoneField]);
    } else if (
      contactPhoneAreaCode.length !== 3 ||
      contactPhonePrefix.length !== 3 ||
      contactPhoneNumber.length !== 4
    ) {
      let phoneLengthErrorMsg = "";
      let phoneField = null;

      if (contactPhoneAreaCode.length !== 3) {
        phoneLengthErrorMsg = "Phone area code should be 3 characters.";
        phoneField = contactPhoneAreaCodeField;
      } else if (contactPhonePrefix.length !== 3) {
        phoneLengthErrorMsg = "Phone prefix should be 3 characters.";
        phoneField = contactPhonePrefixField;
      } else {
        phoneLengthErrorMsg = "Phone number should be 4 characters.";
        phoneField = contactPhoneNumberField;
      }

      if (phoneLengthErrorMsg !== "") {
        errorMsgs.push([phoneLengthErrorMsg, phoneField]);
      }
    }
  }

  function validateBirthday() {
    console.log(
      `Contact Birthday: ${contactBirthdayMonth} / ${contactBirthdayDay}`
    );

    if (contactBirthdayMonth.length === 0 || contactBirthdayDay.length === 0) {
      const birthdayErrorMsg = "Birthday Month and Day are required.";
      let birthdayField = null;

      if (contactBirthdayMonth.length === 0) {
        birthdayField = contactBirthdayMonthField;
      } else {
        birthdayField = contactBirthdayDayField;
      }

      errorMsgs.push([birthdayErrorMsg, birthdayField]);
    } else if (isNaN(contactBirthdayMonth) || isNaN(contactBirthdayDay)) {
      let birthdayFormatErrorMsg = "";
      let birthdayField = null;

      if (isNaN(contactBirthdayMonth)) {
        birthdayFormatErrorMsg = "Birthdday Month should be numeric.";
        birthdayField = contactBirthdayMonthField;
      } else {
        birthdayFormatErrorMsg = "Birthdday Day should be numeric.";
        birthdayField = contactBirthdayDayField;
      }
      errorMsgs.push([birthdayFormatErrorMsg, birthdayField]);
    } else {
      let contactBirthdaMonthyVal = parseInt(contactBirthdayMonth);
      if (contactBirthdaMonthyVal < 1 || contactBirthdaMonthyVal > 12) {
        const contactBirthdaMonthyValErrorMsg =
          "Birthday Month should be between 1 - 12.";
        errorMsgs.push([
          contactBirthdaMonthyValErrorMsg,
          contactBirthdayMonthField,
        ]);
      } else {
        let contactBirthdayDayVal = parseInt(contactBirthdayDay);
        if (contactBirthdayDayVal < 1 || contactBirthdayDayVal > 31) {
          const contactBirthdaDayValErrorMsg =
            "Birthday Day should be between 1 - 31.";
          errorMsgs.push([
            contactBirthdaDayValErrorMsg,
            contactBirthdayDayField,
          ]);
        }
      }
    }
  }

  function displayContacts() {
    // Get Contacts Fiv to display Contact(s) in
    const contactsDiv = document.getElementById("contacts");

    // Clear existing Contacts
    contactsDiv.innerHTML = "";

    // Loop through contacts Array and add the current Contact (at index in Array)
    // to page each time through the loop
    const len = contacts.length; // Get number of Contacts in contacts Array
    for (let indx = 0; indx < len; indx++) {
      contactsDiv.innerHTML += contacts[indx];
    }
  }

  // Declare vars for error message
  const errorMsgPrefix = "Error:";

  // Get the Form so we can listen to the Submit and Reset Events
  const addContactForm = document.getElementById("addContactForm");

  // Listen for Form Reset Event (User clicks 'Reset' Button)
  addContactForm.addEventListener("reset", function (evt) {
    console.log("\naddContactForm Form Reset.");

    // Reset Error Message
    errorMsgs = [];
    document.getElementById("error-msg").innerHTML = "";

    resetFormFieldVarValues();

    // Set the focus of the cursor in the First Name Field
    document.getElementById("contactFName").focus();
  });

  // Listen for Form Submit Event (User clicks 'Add Contact' Button)
  addContactForm.addEventListener("submit", function (evt) {
    // Prevent Form from submitting and reloading the page
    evt.preventDefault();
    console.log("\naddContactForm Form Submitted...");

    // Get the Error Message Span
    const errorMsgSpan = document.getElementById("error-msg");

    // Reset error message(s)
    errorMsgSpan.innerHTML = "";
    errorMsgs = [];

    getFormFieldValues();

    // Validate the User Input
    // Call validation functions
    validateName();
    validateEmail();
    validatePhone();
    validateBirthday();

    // If there is no error, add the new Contact to the page and reset the Form
    if (errorMsgs.length === 0) {
      // Build Contact HTML String (This demo only has 2 Contact Images in the img folder)
      let contactImgSrcPath = "img/";
      if (contacts.length >= 2) {
        contactImgSrcPath += "person.png";
      } else {
        contactImgSrcPath += `contact_${contacts.length}.png`;
      }

      const contactHTML = `
                  <div class='col-md-4'>
                    <div class='card'>
                      <img src='${contactImgSrcPath}' class='card-img-top' alt='${contactFName} ${contactLName}' />
                      <div class='card-body'>
                        <h4 class='card-title'>${contactFName} ${contactLName}</h4>
                        email: <a href='mailto:${contactEmail}'>${contactEmail}</a>
                        <br>phone: ${contactPhoneAreaCode} - ${contactPhonePrefix} - ${contactPhoneNumber}
                        <br>birthday: ${contactBirthdayMonth} / ${contactBirthdayDay}
                      </div>
                    </div>
                  </div>`;

      // Save Contact HTML in contacts Array
      contacts.push(contactHTML);

      displayContacts();

      // Reset Form for next Contact to be added
      addContactForm.reset();
    } else {
      console.log(errorMsgs);

      // Display Error Message(s) in the page
      errorMsgSpan.innerHTML += errorMsgPrefix;
      for (let indx = 0; indx < errorMsgs.length; indx++) {
        errorMsgSpan.innerHTML += `<br> - ${errorMsgs[indx][0]}`;

        // Set cursor in field in first element of Array (first error msg)
        errorMsgs[0][1].focus();
      }
    }
  });
};
