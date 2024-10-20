"use strict";

// This file contains Form handler Functions

// Populate properties of fieldValues Object with data entered into form fields
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

function clearErrorMsgs() {
    errorMsgs = [];
    errorMsgSpan.innerHTML = "";
}

function displayErrorMessage() {
    const errorMsgPrefix = "Error:";

    // Display Error Message(s) in the page
    errorMsgSpan.innerHTML += errorMsgPrefix;
    errorMsgs.forEach(errMsg => {
        errorMsgSpan.innerHTML += `<br> - ${errMsg[0]}`;

        // Set cursor in field in first element of Array (first error msg)
        errorMsgs[0][1].focus();
    });
}

function callValidationFunctions() {
    // Pass appropriate values (fieldValues Object properties) to validation Functions
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
}

function displayContacts() {
    // Get Contacts Fiv to display Contact(s) in
    const contactsDiv = document.getElementById("contacts");

    // Clear existing Contacts
    contactsDiv.innerHTML = "";

    // Loop through contacts Array and add the current Contact to page each time through the loop
    contacts.forEach(contact => {
        // contactsDiv.innerHTML += contact.display(); // Call to Contact Object display() Prototype Function
        contactsDiv.innerHTML += contact.getContactHtml(); // Call to Contact Object display() Prototype Function
    });
}

function toggleClearStorageButton(showButton) {
    if (showButton) {
        clearStorageButton.classList.remove("hide");
    } else {
        clearStorageButton.classList.add("hide");
    }
}

function toggleLocalStorageMsg(showMessage) {
    if (showMessage) {
        localStorageMsg.classList.remove("hide");
    } else {
        localStorageMsg.classList.add("hide");
    }
}