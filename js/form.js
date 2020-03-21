var form = document.querySelector("form");
var button = form.querySelector("button");

var buttonFlag = new Array(false, false, false, false, true);

var firstname = form.querySelector("#name");
var nameInput = firstname.querySelector("input");

nameInput.addEventListener("input", function() {
    const val = this.value;
    const reg = /^[A-Z]{1}[a-z]{2,}$/g; //testujące wyrażenie regularne

    if (!reg.test(val)) {
        this.classList.add("field-error");
        firstname.classList.add("field-error");
        buttonFlag[0] = false;
        button.disabled = true;
    } else {
        this.classList.remove("field-error");
        firstname.classList.remove("field-error");
        buttonFlag[0] = true;
        let z = true;
        buttonFlag.forEach(x => {
            if (x == false) {
                z = false;
            }
        });
        if (z == true) button.disabled = false;
    }
});

var surname = form.querySelector("#surname");
var surnameInput = surname.querySelector("input");

surnameInput.addEventListener("input", function() {
    const val = this.value;
    const reg = /^[A-Z]{1}[a-z]{1,}$/g; //testujące wyrażenie regularne

    if (!reg.test(val)) {
        this.classList.add("field-error");
        surname.classList.add("field-error");
        buttonFlag[1] = false;
        button.disabled = true;
    } else {
        this.classList.remove("field-error");
        surname.classList.remove("field-error");

        buttonFlag[1] = true;
        let z = true;
        buttonFlag.forEach(x => {
            if (x == false) {
                z = false;
            }
        });
        if (z == true) button.disabled = false;
    }
});

var phone = form.querySelector("#phone");
var phoneInput = phone.querySelector("input");

phoneInput.addEventListener("input", function() {
    const val = this.value;
    const reg = /^[0-9]{9,9}$/g; //testujące wyrażenie regularne

    if (!reg.test(val)) {
        this.classList.add("field-error");
        phone.classList.add("field-error");

        buttonFlag[2] = false;
        button.disabled = true;
    } else {
        this.classList.remove("field-error");
        phone.classList.remove("field-error");

        buttonFlag[2] = true;
        let z = true;
        buttonFlag.forEach(x => {
            if (x == false) {
                z = false;
            }
        });
        if (z == true) button.disabled = false;
    }
});

var email = form.querySelector("#email");
var emailInput = email.querySelector("input");

emailInput.addEventListener("input", function() {
    const val = this.value;
    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/; //testujące wyrażenie regularne

    if (!reg.test(val)) {
        this.classList.add("field-error");
        email.classList.add("field-error");

        buttonFlag[3] = false;
        button.disabled = true;
    } else {
        this.classList.remove("field-error");
        email.classList.remove("field-error");

        buttonFlag[3] = true;
        let z = true;
        buttonFlag.forEach(x => {
            if (x == false) {
                z = false;
            }
        });
        if (z == true) button.disabled = false;
    }
});

var msg = form.querySelector("#msg");
var msgInput = msg.querySelector("input");

msgInput.addEventListener("input", function() {
    const val = this.value;
    const reg = []; //testujące wyrażenie regularne

    if (!reg.test(val)) {
        this.classList.add("field-error");
        msg.classList.add("field-error");

        buttonFlag[3] = false;
        button.disabled = true;
    } else {
        this.classList.remove("field-error");
        msg.classList.remove("field-error");

        buttonFlag[4] = true;
        let z = true;
        buttonFlag.forEach(x => {
            if (x == false) {
                z = false;
            }
        });
        if (z == true) button.disabled = false;
    }
});
