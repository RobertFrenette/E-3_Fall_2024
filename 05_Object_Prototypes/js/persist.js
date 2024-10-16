"use strict";

// This file handles Local Storage

// Get existing Contacts from Local Storage
function checkForExistingContacts() {
    if (typeof (Storage) !== "undefined") {
        // try and get Contacts from storage
        let persistedContacts = localStorage.getItem('persistedContacts');

        if (persistedContacts !== null) {
            persistedContacts = JSON.parse(persistedContacts);

            // loop through persistedContacts
            persistedContacts.forEach(contact => {
                contacts.push(new Contact(
                    contacts.length,
                    contact.contactFName,
                    contact.contactLName,
                    contact.contactEmail,
                    contact.contactPhoneAreaCode, contact.contactPhonePrefix, contact.contactPhoneNumber,
                    contact.contactBirthdayMonth, contact.contactBirthdayDay));
            });
        };
    };
}

// Save Array of Contact Object to Local Storage
function saveContacts() {
    localStorage.setItem('persistedContacts', JSON.stringify(contacts));
    localStorageMsg.innerHTML = contactsSavedMessage;
    toggleClearStorageButton(SHOW);
}

// Clear Contacts from Local Storage
function clearStorage() {
    localStorage.removeItem('persistedContacts');
    toggleClearStorageButton(HIDE);
    localStorageMsg.innerHTML = clearStorageMessage;
    fieldElements.contactFNameField.focus();
}
