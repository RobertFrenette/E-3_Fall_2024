function Contact(
    contactIndx,
    contactFName, contactLName,
    contactEmail,
    contactPhoneAreaCode, contactPhonePrefix, contactPhoneNumber,
    contactBirthdayMonth, contactBirthdayDay) {
    // Properties
    this.contactIndx = contactIndx;
    this.contactFName = contactFName;
    this.contactLName = contactLName;
    this.contactEmail = contactEmail;
    this.contactPhoneAreaCode = contactPhoneAreaCode;
    this.contactPhonePrefix = contactPhonePrefix;
    this.contactPhoneNumber = contactPhoneNumber;
    this.contactBirthdayMonth = contactBirthdayMonth;
    this.contactBirthdayDay = contactBirthdayDay;

    // Getters
    this.getContactFullName = () => {
        return `${this.contactFName} ${this.contactLName}`;
    };
    this.getContactEmail = () => {
        return this.contactEmail;
    };
    this.getContactPhone = () => {
        return `${this.contactPhoneAreaCode} - ${this.contactPhonePrefix} - ${this.contactPhoneNumber}`;
    };
    this.getContactBirthday = () => {
        return `${this.contactBirthdayMonth} / ${this.contactBirthdayDay}`;
    };

    // Utility Function(s)
    this.display = () => {
        let contactImgSrcPath = "img/";
        if (contactIndx >= 2) {
            contactImgSrcPath += "person.png";
        } else {
            contactImgSrcPath += `contact_${contactIndx}.png`;
        }

        const contactFullName = this.getContactFullName();
        const contactEmail = this.getContactEmail();

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
};