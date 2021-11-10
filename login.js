function validate() {
    var Uname =
        document.forms["Login"]["uname"];
    var Email =
        document.forms["Login"]["email"];
    var Pass =
        document.forms["Login"]["pwd"];
    

    if (Uname.value == "") {
        alert("Please enter your  User Name.");
        Uname.focus();
        return false;
    }

    if (Email.value == "") {
        alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (Pass.value == "" || !Pass.value.match(/^.{5,15}$/)) {
        alert("Please enter your password and it should be length must be between 5-15 characters!");
        Pass.focus();
        return false;
    }


    return true;
}
