// force Strict Mode
"use strict";

window.onload = function () {
  let contacts = [];
  let errorMsgs = [];
  const errorMsgSpan = document.getElementById("error-msg");
  const addContactForm = document.getElementById("addContactForm");

  let fieldElements = {
    contactFNameField: document.getElementById("contactFName"),
    contactLNameField: document.getElementById("contactLName"),
    contactEmailField: document.getElementById("contactEmail"),
    contactPhoneAreaCodeField: document.getElementById("contactPhoneAreaCode"),
    contactPhonePrefixField: document.getElementById("contactPhonePrefix"),
    contactPhoneNumberField: document.getElementById("contactPhoneNumber"),
    contactBirthdayMonthField: document.getElementById("contactBirthdayMonth"),
    contactBirthdayDayField: document.getElementById("contactBirthdayDay"),
  };

  let fieldValues = {
    contactFName: "",
    contactLName: "",
    contactEmail: "",
    contactPhoneAreaCode: "",
    contactPhonePrefix: "",
    contactPhoneNumber: "",
    contactBirthdayMonth: "",
    contactBirthdayDay: "",
  };

  function checkForExistingContacts() {
    if (typeof (Storage) !== "undefined") {
      // try and get Contacts from storage
      let persistedContacts = localStorage.getItem('persistedContacts');

      if (persistedContacts !== null) {
        persistedContacts = JSON.parse(persistedContacts);

        console.log(persistedContacts);

        // loop through persistedContacts
        for (let i in persistedContacts) {
          let contact = persistedContacts[i];
          console.log(contact);

          const newContact = buildContact(
            contact.contactFName, contact.contactLName,
            contact.contactEmail,
            contact.contactPhoneAreaCode, contact.contactPhonePrefix, contact.contactPhoneNumber,
            contact.contactBirthdayMonth, contact.contactBirthdayDay);
          contacts.push(newContact);
        };

        displayContacts();
      };
    };
  };

  function getFormFieldValues() {
    fieldValues.contactFName = fieldElements.contactFNameField.value.trim();
    fieldValues.contactLName = fieldElements.contactLNameField.value.trim();
    fieldValues.contactEmail = fieldElements.contactEmailField.value.trim();
    fieldValues.contactPhoneAreaCode =
      fieldElements.contactPhoneAreaCodeField.value.trim();
    fieldValues.contactPhonePrefix =
      fieldElements.contactPhonePrefixField.value.trim();
    fieldValues.contactPhoneNumber =
      fieldElements.contactPhoneNumberField.value.trim();
    fieldValues.contactBirthdayMonth =
      fieldElements.contactBirthdayMonthField.value.trim();
    fieldValues.contactBirthdayDay =
      fieldElements.contactBirthdayDayField.value.trim();
  }

  function resetFormFieldValues() {
    fieldValues.contactFName = "";
    fieldValues.contactLName = "";
    fieldValues.contactEmail = "";
    fieldValues.contactPhoneAreaCode = "";
    fieldValues.contactPhonePrefix = "";
    fieldValues.contactPhoneNumber = "";
    fieldValues.contactBirthdayMonth = "";
    fieldValues.contactBirthdayDay = "";
  }

  function validateName(contactFName, contactLName) {
    if (contactFName.length === 0 || contactLName.length === 0) {
      // Check if Last Name Field is empty
      if (contactFName.length === 0 && contactLName.length === 0) {
        // Check if both First and Last Name Fields are empty
        errorMsgs.push([
          "First and Last Names are required.",
          fieldElements.contactFNameField,
        ]);
      } else if (fieldValues.contactFName.length === 0) {
        // Check if First Name Field is empty
        errorMsgs.push([
          "First Name is required.",
          fieldElements.contactFNameField,
        ]);
      } else {
        errorMsgs.push([
          "Last Name is required.",
          fieldElements.contactLNameField,
        ]);
      }
    }
  }

  function validateEmail(contactEmail) {
    if (contactEmail.length === 0) {
      errorMsgs.push([
        "Email Address is required.",
        fieldElements.contactEmailField,
      ]);
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
        errorMsgs.push([emailFormatErrorMsg, fieldElements.contactEmailField]);
      }
    }
  }

  function validatePhone(
    contactPhoneAreaCode,
    contactPhonePrefix,
    contactPhoneNumber
  ) {
    if (
      contactPhoneAreaCode.length === 0 ||
      contactPhonePrefix.length === 0 ||
      contactPhoneNumber.length === 0
    ) {
      const phoneErrorMsg = "All Phone fields are required.";
      let phoneField = null;

      if (contactPhoneAreaCode.length === 0) {
        phoneField = fieldElements.contactPhoneAreaCodeField;
      } else if (contactPhonePrefix.length === 0) {
        phoneField = fieldElements.contactPhonePrefixField;
      } else {
        phoneField = fieldElements.contactPhoneNumberField;
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
        phoneField = fieldElements.contactPhoneAreaCodeField;
      } else if (isNaN(contactPhonePrefix)) {
        phoneField = fieldElements.contactPhonePrefixField;
      } else {
        phoneField = fieldElements.contactPhoneNumberField;
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
        phoneField = fieldElements.contactPhoneAreaCodeField;
      } else if (contactPhonePrefix.length !== 3) {
        phoneLengthErrorMsg = "Phone prefix should be 3 characters.";
        phoneField = fieldElements.contactPhonePrefixField;
      } else {
        phoneLengthErrorMsg = "Phone number should be 4 characters.";
        phoneField = fieldElements.contactPhoneNumberField;
      }

      if (phoneLengthErrorMsg !== "") {
        errorMsgs.push([phoneLengthErrorMsg, phoneField]);
      }
    }
  }

  function validateBirthday(contactBirthdayMonth, contactBirthdayDay) {
    if (contactBirthdayMonth.length === 0 || contactBirthdayDay.length === 0) {
      const birthdayErrorMsg = "Birthday Month and Day are required.";
      let birthdayField = null;

      if (contactBirthdayMonth.length === 0) {
        birthdayField = fieldElements.contactBirthdayMonthField;
      } else {
        birthdayField = fieldElements.contactBirthdayDayField;
      }

      errorMsgs.push([birthdayErrorMsg, birthdayField]);
    } else if (isNaN(contactBirthdayMonth) || isNaN(contactBirthdayDay)) {
      let birthdayFormatErrorMsg = "";
      let birthdayField = null;

      if (isNaN(contactBirthdayMonth)) {
        birthdayFormatErrorMsg = "Birthdday Month should be numeric.";
        birthdayField = fieldElements.contactBirthdayMonthField;
      } else {
        birthdayFormatErrorMsg = "Birthdday Day should be numeric.";
        birthdayField = fieldElements.contactBirthdayDayField;
      }
      errorMsgs.push([birthdayFormatErrorMsg, birthdayField]);
    } else {
      let contactBirthdaMonthyVal = parseInt(contactBirthdayMonth);
      if (contactBirthdaMonthyVal < 1 || contactBirthdaMonthyVal > 12) {
        const contactBirthdaMonthyValErrorMsg =
          "Birthday Month should be between 1 - 12.";
        errorMsgs.push([
          contactBirthdaMonthyValErrorMsg,
          fieldElements.contactBirthdayMonthField,
        ]);
      } else {
        let contactBirthdayDayVal = parseInt(contactBirthdayDay);
        if (contactBirthdayDayVal < 1 || contactBirthdayDayVal > 31) {
          const contactBirthdaDayValErrorMsg =
            "Birthday Day should be between 1 - 31.";
          errorMsgs.push([
            contactBirthdaDayValErrorMsg,
            fieldElements.contactBirthdayDayField,
          ]);
        }
      }
    }
  }

  function buildContact(
    contactFName, contactLName,
    contactEmail,
    contactPhoneAreaCode, contactPhonePrefix, contactPhoneNumber,
    contactBirthdayMonth, contactBirthdayDay) {
    let newContact = new Contact(
      contacts.length,
      contactFName, contactLName,
      contactEmail,
      contactPhoneAreaCode, contactPhonePrefix, contactPhoneNumber,
      contactBirthdayMonth, contactBirthdayDay);
    return newContact;
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
      contactsDiv.innerHTML += contacts[indx].display();
    }
  }

  function clearErrorMsgs() {
    errorMsgs = [];
    errorMsgSpan.innerHTML = "";
  }

  function displayErrorMessage() {
    const errorMsgPrefix = "Error:";

    // Display Error Message(s) in the page
    errorMsgSpan.innerHTML += errorMsgPrefix;
    for (let indx = 0; indx < errorMsgs.length; indx++) {
      errorMsgSpan.innerHTML += `<br> - ${errorMsgs[indx][0]}`;

      // Set cursor in field in first element of Array (first error msg)
      errorMsgs[0][1].focus();
    }
  }

  // Listen for Form Reset Event
  addContactForm.addEventListener("reset", (evt) => {
    clearErrorMsgs();
    resetFormFieldValues();
    fieldElements.contactFNameField.focus();
  });

  // Listen for Form Submit Event
  addContactForm.addEventListener("submit", (evt) => {
    // Prevent Form from submitting and reloading the page
    evt.preventDefault();

    clearErrorMsgs();
    getFormFieldValues();

    validateName(fieldValues.contactFName, fieldValues.contactLName);
    validateEmail(fieldValues.contactEmail);
    validatePhone(
      fieldValues.contactPhoneAreaCode,
      fieldValues.contactPhonePrefix,
      fieldValues.contactPhoneNumber
    );
    validateBirthday(
      fieldValues.contactBirthdayMonth,
      fieldValues.contactBirthdayDay
    );

    // If there is no error, add the new Contact to the page and reset the Form
    if (errorMsgs.length === 0) {
      // Save Contact in contacts Array
      contacts.push(buildContact(
        fieldValues.contactFName, fieldValues.contactLName,
        fieldValues.contactEmail,
        fieldValues.contactPhoneAreaCode, fieldValues.contactPhonePrefix, fieldValues.contactPhoneNumber,
        fieldValues.contactBirthdayMonth, fieldValues.contactBirthdayDay));
      // persist Contacts to LocalStorage
      localStorage.setItem('persistedContacts', JSON.stringify(contacts));

      displayContacts();
      addContactForm.reset();
    } else {
      displayErrorMessage();
    }
  });

  checkForExistingContacts();
};
