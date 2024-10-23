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

  display(contactsDiv) {
    let contactImgSrcPath = "img/";
    let contactIndx = this._contactIndx;
    if (contactIndx >= 2) {
      contactImgSrcPath += "person.png";
    } else {
      contactImgSrcPath += `contact_${this._contactIndx}.png`;
    }

    const contactFullName = this.getContactFullName();
    const contactEmail = this._contactEmail;

    // Build HTML DOM Elements
    const outterDiv = document.createElement("div");
    outterDiv.setAttribute("className", "col-md-4");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("className", "card");

    const img = document.createElement("img");
    img.setAttribute("className", "card-img-top");
    img.setAttribute("src", contactImgSrcPath);
    img.setAttribute("alt", contactFullName);
    cardDiv.appendChild(img);

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("className", "card-body");

    const h4 = document.createElement("h4");
    h4.setAttribute("className", "card-title");
    const h4Text = document.createTextNode(contactFullName);
    h4.appendChild(h4Text);
    cardBodyDiv.appendChild(h4);

    const emailAnchor = document.createElement("a");
    emailAnchor.setAttribute("href", `mailto:${contactEmail}`);
    const emailAnchortText = document.createTextNode(contactEmail);
    emailAnchor.appendChild(emailAnchortText);
    cardBodyDiv.appendChild(emailAnchor);

    const phoneBR = document.createElement("br");
    const phoneText = document.createTextNode(this.getContactPhone());
    cardBodyDiv.appendChild(phoneBR);
    cardBodyDiv.appendChild(phoneText);

    const birthdayBR = document.createElement("br");
    const birthdayText = document.createTextNode(this.getContactBirthday());
    cardBodyDiv.appendChild(birthdayBR);
    cardBodyDiv.appendChild(birthdayText);

    cardDiv.appendChild(cardBodyDiv);
    outterDiv.appendChild(cardDiv);
    contactsDiv.appendChild(outterDiv);

    const hr = document.createElement("hr");
    contactsDiv.appendChild(hr);

    // return `<div class='col-md-4'>
    //           <div class='card'>
    //             <img src='${contactImgSrcPath}' class='card-img-top' alt='${contactFullName}' />
    //             <div class='card-body'>
    //               <h4 class='card-title'>${contactFullName}</h4>
    //               email: <a href='mailto:${contactEmail}'>${contactEmail}</a>
    //               <br>phone: ${this.getContactPhone()}
    //               <br>birthday: ${this.getContactBirthday()}
    //             </div>
    //           </div>
    //         </div>`;
  }

  /*
    Static methods are ideal for creating utility functions associated with a class, 
    but don't require access to instance-specific data (such as the display() method in this Class).
    This helps organize code and keeps the class's instance methods focused on instance-specific operations.
  */
  static createContact(
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
    return new Contact(
      contactIndx,
      contactFName,
      contactLName,
      contactEmail,
      contactPhoneAreaCode,
      contactPhonePrefix,
      contactPhoneNumber,
      contactBirthdayMonth,
      contactBirthdayDay
    );
  }
}
