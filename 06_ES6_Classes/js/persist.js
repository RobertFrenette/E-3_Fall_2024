"use strict";

// This file handles Local Storage

// Get existing Contacts from Local Storage
function checkForExistingContacts() {
  if (typeof Storage !== "undefined") {
    // try and get Contacts from storage
    let persistedContacts = localStorage.getItem("persistedContacts");

    if (persistedContacts !== null) {
      persistedContacts = JSON.parse(persistedContacts);

      // loop through persistedContacts
      persistedContacts.forEach((contact, indx) => {
        contacts.push(
          Contact.createContact(
            indx,
            contact._contactFName,
            contact._contactLName,
            contact._contactEmail,
            contact._contactPhoneAreaCode,
            contact._contactPhonePrefix,
            contact._contactPhoneNumber,
            contact._contactBirthdayMonth,
            contact._contactBirthdayDay
          )
        );
      });
    }
  }
}

// Save Array of Contact Object to Local Storage
function saveContacts() {
  localStorage.setItem("persistedContacts", JSON.stringify(contacts));
  localStorageMsg.innerHTML = contactsSavedMessage;
  toggleLocalStorageMsg(SHOW);
  toggleClearStorageButton(SHOW);
}

// Clear Contacts from Local Storage
function clearStorage() {
  localStorage.removeItem("persistedContacts");
  toggleClearStorageButton(HIDE);
  localStorageMsg.innerHTML = clearStorageMessage;
  toggleLocalStorageMsg(SHOW);
  fieldElements.contactFNameField.focus();
}
