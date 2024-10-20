"use strict";

// Consts for HTML Elements
const addContactForm = document.getElementById("addContactForm");
const clearStorageButton = document.getElementById("clearStorage");
const errorMsgSpan = document.getElementById("errorMsg");
const localStorageMsg = document.getElementById("localStorageMsg");

// Consts for Clear Local Storage button and message
const SHOW = true;
const HIDE = false;
const clearStorageMessage =
  "All Contacts have been removed from Local Storage. Refresh this page to see the results.";
const contactsSavedMessage =
  "Contacts have been saved in Local Storage. Refresh this page to see the results.";

window.onload = function () {
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

    // Call User data validation functions
    callValidationFunctions();

    // If there is no error, add the new Contact to the page and reset the Form
    if (!errorMsgs.length) {
      // Save new Contact Object in contacts Array
      contacts.push(
        new Contact(
          contacts.length,
          fieldValues.contactFName,
          fieldValues.contactLName,
          fieldValues.contactEmail,
          fieldValues.contactPhoneAreaCode,
          fieldValues.contactPhonePrefix,
          fieldValues.contactPhoneNumber,
          fieldValues.contactBirthdayMonth,
          fieldValues.contactBirthdayDay
        )
      );

      // Persist Contacts to LocalStorage
      saveContacts(contacts);

      displayContacts();
      addContactForm.reset();
    } else {
      displayErrorMessage();
    }
  });

  // Listen for Clear Storage Button click
  clearStorageButton.addEventListener("click", (evt) => {
    clearStorage();
  });

  // Check Local Storage for existing Contacts
  checkForExistingContacts(contacts);
  if (contacts.length) {
    displayContacts();
    localStorageMsg.innerHTML = contactsSavedMessage;
    toggleClearStorageButton(SHOW);
  }
};
