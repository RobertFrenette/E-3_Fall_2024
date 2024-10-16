"use strict";

// Array to hold Contact Objects
let contacts = [];
// Array to hold error messges
let errorMsgs = [];

// Object to hold form fields - each Object property is an HTML form field
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

// Object to hold form field values - each Object property will hold a value entered into a form field
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