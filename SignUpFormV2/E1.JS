function checkValidates() {
  var username = document.forms["RegForm"]["username"];
  var email = document.forms["RegForm"]["email"];
  var pw = document.forms["RegForm"]["password"];
  var cpw = document.forms["RegForm"]["confirm_password"];

  if (username.value == "") {
    window.alert("Please Enter username.");
    username.focus();

    return false;
  }

  if (email.value == "") {
    window.alert("Please Enter Email.");
    email.focus();

    return false;
  }

  if (pw.value == "") {
    window.alert("Please Enter Password.");
    pw.focus();

    return false;
  }

  if (cpw.value == "") {
    window.alert("Please Enter Confirm Password.");
    cpw.focus();

    return false;
  }

  if (pw.value != cpw.value) {
    window.alert("Password Mismatch.");
    pw.focus();

    return false;
  }

  return true;
}
