"use strict";

// This file contains User input validation Functions

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
