// force Strict Mode
"use strict";

/*
 * This code is a bit more "complex" than what we've covered in the Course thus far,
 * but it's manageable.
 *
 * Also, there's quite a bit of repatitive code in this example. We'll show how to
 * make this code more efficient as the Semester progresses.
 */

// execute the following code after the page has loaded
window.onload = function () {
  console.log("Page loaded.");

  // Declare vars for error message
  const errorMsgPrefix = "Error:";
  let errorMsg = "";

  // Declare var to hold Contacts
  let contacts = []; // default to empty Array

  // Get the Form so we can listen to the Submit and Reset Events
  const addContactForm = document.getElementById("addContactForm");

  // Listen for Form Reset Event (User clicks "Reset" Button)
  addContactForm.addEventListener("reset", function (evt) {
    console.log("addContactForm Form Reset.");

    // Reset Error Message
    errorMsg = "";
    document.getElementById("error-msg").innerHTML = errorMsg;

    // Set the focus of the cursor in the First Name Field
    document.getElementById("contactFName").focus();
  });

  // Listen for Form Submit Event (User clicks "Add Contact" Button)
  addContactForm.addEventListener("submit", function (evt) {
    // Prevent Form from submitting and reloading the page
    evt.preventDefault();
    console.log("---------------------------------------------");
    console.log("addContactForm Form Submitted...");

    // Reset error message
    errorMsg = "";

    // Get the Error Message Span
    const errorMsgSpan = document.getElementById("error-msg");

    // Get the Form Fields
    const contactFNameField = document.getElementById("contactFName");
    const contactLNameField = document.getElementById("contactLName");

    const contactEmailField = document.getElementById("contactEmail");

    const contactPhoneAreaCodeField = document.getElementById(
      "contactPhoneAreaCode"
    );
    const contactPhonePrefixField =
      document.getElementById("contactPhonePrefix");
    const contactPhoneNumberField =
      document.getElementById("contactPhoneNumber");

    const contactBirthdayMonthField = document.getElementById(
      "contactBirthdayMonth"
    );
    const contactBirthdayDayField =
      document.getElementById("contactBirthdayDay");

    // Validate the User Input
    // Check if Birthday Month and Day fields are entered, that they are numeric, and are valid values
    const contactBirthdayMonth = contactBirthdayMonthField.value.trim();
    const contactBirthdayDay = contactBirthdayDayField.value.trim();
    console.log(
      `Contact Birthday: ${contactBirthdayMonth} / ${contactBirthdayDay}`
    );
    if (contactBirthdayMonth.length === 0 || contactBirthdayDay.length === 0) {
      const birthdayErrorMsg = "<br>- Birthday Month and Day are required.";

      if (contactBirthdayMonth.length === 0) {
        contactBirthdayMonthField.focus();
      } else {
        contactBirthdayDayField.focus();
      }

      if (errorMsg === "") {
        errorMsg = birthdayErrorMsg;
      } else {
        errorMsg += birthdayErrorMsg;
      }
    } else if (isNaN(contactBirthdayMonth) || isNaN(contactBirthdayDay)) {
      let birthdayFormatErrorMsg = "";
      if (isNaN(contactBirthdayMonth)) {
        birthdayFormatErrorMsg = "<br>- Birthdday Month should be numeric.";
        contactBirthdayMonthField.focus();
      } else {
        birthdayFormatErrorMsg = "<br>- Birthdday Day should be numeric.";
        contactBirthdayDayField.focus();
      }

      if (errorMsg === "") {
        errorMsg = birthdayFormatErrorMsg;
      } else {
        errorMsg += birthdayFormatErrorMsg;
      }
    } else {
      let contactBirthdaMonthyVal = parseInt(contactBirthdayMonth);
      if (contactBirthdaMonthyVal < 1 || contactBirthdaMonthyVal > 12) {
        const contactBirthdaMonthyValErrorMsg =
          "<br>- Birthday Month should be between 1 - 12.";
        if (errorMsg === "") {
          errorMsg = contactBirthdaMonthyValErrorMsg;
        } else {
          errorMsg += contactBirthdaMonthyValErrorMsg;
        }
        contactBirthdayMonthField.focus();
      } else {
        let contactBirthdayDayVal = parseInt(contactBirthdayDay);
        if (contactBirthdayDayVal < 1 || contactBirthdayDayVal > 31) {
          const contactBirthdaDayValErrorMsg =
            "<br>- Birthday Day should be between 1 - 31.";
          if (errorMsg === "") {
            errorMsg = contactBirthdaDayValErrorMsg;
          } else {
            errorMsg += contactBirthdaDayValErrorMsg;
          }
          contactBirthdayDayField.focus();
        }
      }
    }

    // Check if Phone Fields are entered and are numbers
    const contactPhoneAreaCode = contactPhoneAreaCodeField.value.trim();
    const contactPhonePrefix = contactPhonePrefixField.value.trim();
    const contactPhoneNumber = contactPhoneNumberField.value.trim();
    console.log(
      `Contact Phone: ${contactPhoneAreaCode} - ${contactPhoneNumber} - ${contactPhoneNumber}`
    );
    if (
      contactPhoneAreaCode.length === 0 ||
      contactPhonePrefix.length === 0 ||
      contactPhoneNumber.length === 0
    ) {
      const phoneErrorMsg = "<br>- All Phone fields are required.";

      if (contactPhoneAreaCode.length === 0) {
        contactPhoneAreaCodeField.focus();
      } else if (contactPhonePrefix.length === 0) {
        contactPhonePrefixField.focus();
      } else {
        contactPhoneNumberField.focus();
      }

      if (errorMsg === "") {
        errorMsg = phoneErrorMsg;
      } else {
        errorMsg += phoneErrorMsg;
      }
    } else if (
      isNaN(contactPhoneAreaCode) ||
      isNaN(contactPhonePrefix) ||
      isNaN(contactPhoneNumber)
    ) {
      const phoneFormatErrorMsg = "<br>- All Phone fields should be numeric.";

      if (isNaN(contactPhoneAreaCode)) {
        contactPhoneAreaCodeField.focus();
      } else if (isNaN(contactPhonePrefix)) {
        contactPhonePrefixField.focus();
      } else {
        contactPhoneNumberField.focus();
      }

      if (errorMsg === "") {
        errorMsg = phoneFormatErrorMsg;
      } else {
        errorMsg += phoneFormatErrorMsg;
      }
    } else if (
      contactPhoneAreaCode.length !== 3 ||
      contactPhonePrefix.length !== 3 ||
      contactPhoneNumber.length !== 4
    ) {
      let phoneLengthErrorMsg = "";

      if (contactPhoneAreaCode.length !== 3) {
        phoneLengthErrorMsg = "<br>- Phone area code should be 3 characters.";
        contactPhoneAreaCodeField.focus();
      } else if (contactPhonePrefix.length !== 3) {
        phoneLengthErrorMsg = "<br>- Phone prefix should be 3 characters.";
        contactPhonePrefixField.focus();
      } else {
        phoneLengthErrorMsg = "<br>- Phone number should be 4 characters.";
        contactPhoneNumberField.focus();
      }

      if (phoneLengthErrorMsg !== "") {
        if (errorMsg === "") {
          errorMsg = phoneLengthErrorMsg;
        } else {
          errorMsg += phoneLengthErrorMsg;
        }
      }
    }

    // Check if Email is entered and is a valid email address (includes @ and .)
    const contactEmail = contactEmailField.value.trim();
    console.log(`Contact Email: ${contactEmail}`);
    if (contactEmail.length === 0) {
      const emailRequiredErrorMsg = "<br>- Email Address is required.";
      if (errorMsg === "") {
        errorMsg = emailRequiredErrorMsg;
      } else {
        errorMsg += emailRequiredErrorMsg;
      }
      contactEmailField.focus();
    } else {
      // Email entered, so make sure it's valid
      let hasEmailFormatError = false;
      const emailFormatErrorMsg = "<br>- Email Address is invalid.";

      if (!contactEmail.includes("@") || !contactEmail.includes(".")) {
        hasEmailFormatError = true;
      } else if (contactEmail.indexOf(".") !== contactEmail.length - 4) {
        // Make sure the . is in the right position (ex: .com)
        hasEmailFormatError = true;
      }

      if (hasEmailFormatError) {
        if (errorMsg === "") {
          errorMsg = emailFormatErrorMsg;
        } else {
          errorMsg += emailFormatErrorMsg;
        }
        contactEmailField.focus();
      }
    }

    // Check if First and Last Name are entered
    const contactFName = contactFNameField.value.trim();
    const contactLName = contactLNameField.value.trim();
    console.log(`Contact Name: ${contactFName} ${contactLName}`);
    if (contactFName.length === 0 || contactLName.length === 0) {
      let contactNameErrorMsg = "";

      // Check if Last Name Field is empty
      if (contactFName.length === 0 && contactLName.length === 0) {
        // Check if both First and Last Name Fields are empty
        contactNameErrorMsg = "<br>- First and Last Names are required.";
        contactFNameField.focus();
      } else if (contactFName.length === 0) {
        // Check if First Name Field is empty
        contactNameErrorMsg = "<br>- First Name is required.";
        contactFNameField.focus();
      } else {
        contactNameErrorMsg = "<br>- Last Name is required.";
        contactLNameField.focus();
      }

      if (errorMsg === "") {
        errorMsg = contactNameErrorMsg;
      } else {
        errorMsg += contactNameErrorMsg;
      }
    }

    errorMsgSpan.innerHTML = `${errorMsgPrefix} ${errorMsg}`;

    // If there is no error, add the new Contact to the page and reset the Form
    if (errorMsg === "") {
      // Get Contacts Fiv to display Contact(s) in
      const contactsDiv = document.getElementById("contacts");

      // Build Contact HTML String (This demo only has 2 Contact Images in the img folder)
      let contactImgSrcPath = "img/";
      console.log(contacts.length);
      if (contacts.length >= 2) {
        contactImgSrcPath += "person.png";
      } else {
        contactImgSrcPath += `contact_${contacts.length}.png`;
      }
      console.log(contactImgSrcPath);
      const contactHTML = `
                  <div class="col-md-4">
                    <div class="card">
                      <img src="${contactImgSrcPath}" class="card-img-top" alt="${contactFName} ${contactLName}" />
                      <div class="card-body">
                        <h4 class="card-title">${contactFName} ${contactLName}</h4>
                        email: <a href="mailto:${contactEmail}">${contactEmail}</a>
                        <br>phone: ${contactPhoneAreaCode} - ${contactPhonePrefix} - ${contactPhoneNumber}
                        <br>birthday: ${contactBirthdayMonth} / ${contactBirthdayDay}
                      </div>
                    </div>
                  </div>`;

      // Save Contact HTML in Array
      contacts.push(contactHTML);
      console.log(`Contacts: ${contacts}`);

      // Clear existing Contacts
      contactsDiv.innerHTML = "";

      // Loop through contacts Array and add the current Contact (at index in Array)
      // to page each time through the loop
      const len = contacts.length; // Get number of Contacts in contacts Array
      for (let indx = 0; indx < len; indx++) {
        contactsDiv.innerHTML += contacts[indx];
      }

      // Reset Form for next Contact to be added
      addContactForm.reset();
    }
  });
};
