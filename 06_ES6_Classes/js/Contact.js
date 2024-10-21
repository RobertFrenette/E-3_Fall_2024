"use strict";

// This file is the Contact Object

// Contact Class
class Contact {
  constructor(
    contactIndx,
    contactFName,
    contactLName,
    contactEmail,
    contactPhoneAreaCode,
    contactPhonePrefix,
    contactPhoneNumber,
    contactBirthdayMonth,
    contactBirthdayDay
  ) {
    this._contactIndx = contactIndx;
    this._contactFName = contactFName;
    this._contactLName = contactLName;
    this._contactEmail = contactEmail;
    this._contactPhoneAreaCode = contactPhoneAreaCode;
    this._contactPhonePrefix = contactPhonePrefix;
    this._contactPhoneNumber = contactPhoneNumber;
    this._contactBirthdayMonth = contactBirthdayMonth;
    this._contactBirthdayDay = contactBirthdayDay;
  }

  getContactFullName() {
    return `${this._contactFName} ${this._contactLName}`;
  }

  getContactPhone() {
    return `${this._contactPhoneAreaCode} - ${this._contactPhonePrefix} - ${this._contactPhoneNumber}`;
  }

  getContactBirthday() {
    return `${this._contactBirthdayMonth} / ${this._contactBirthdayDay}`;
  }

  getContactHtml() {
    let contactImgSrcPath = "img/";
    let contactIndx = this._contactIndx;
    if (contactIndx >= 2) {
      contactImgSrcPath += "person.png";
    } else {
      contactImgSrcPath += `contact_${this._contactIndx}.png`;
    }

    const contactFullName = this.getContactFullName();
    const contactEmail = this._contactEmail;

    return `<div class='col-md-4'>
                        <div class='card'>
                            <img src='${contactImgSrcPath}' class='card-img-top' alt='${contactFullName}' />
                            <div class='card-body'>
                            <h4 class='card-title'>${contactFullName}</h4>
                            email: <a href='mailto:${contactEmail}'>${contactEmail}</a>
                            <br>phone: ${this.getContactPhone()}
                            <br>birthday: ${this.getContactBirthday()}
                            </div>
                        </div>
                    </div>`;
  }

  /*
    Static methods are ideal for creating utility functions associated with a class, 
    but don't require access to instance-specific data (such as the getContactHtml() method in this Class).
    This helps organize code and keeps the class's instance methods focused on instance-specific operations.
  */
  static createContact(contactIndx,
    contactFName,
    contactLName,
    contactEmail,
    contactPhoneAreaCode,
    contactPhonePrefix,
    contactPhoneNumber,
    contactBirthdayMonth,
    contactBirthdayDay) {
    return new Contact(contactIndx,
      contactFName,
      contactLName,
      contactEmail,
      contactPhoneAreaCode,
      contactPhonePrefix,
      contactPhoneNumber,
      contactBirthdayMonth,
      contactBirthdayDay)
  }
}
