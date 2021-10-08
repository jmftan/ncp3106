function checkValidates() {
  var title = document.forms["RegForm"]["identity"];
  var fullName = document.forms["RegForm"]["fullName"];
  var username = document.forms["RegForm"]["username"];
  var email = document.forms["RegForm"]["email"];
  var phoneNumber = document.forms["RegForm"]["phoneNumber"];
  var pw = document.forms["RegForm"]["password"];
  var cpw = document.forms["RegForm"]["confirm-password"];
  var country = document.forms["RegForm"]["country"];
  var terms = document.forms["RegForm"]["terms"];

  if (title.value == "") {
    window.alert("Please enter title.");
    title.focus();

    return false;
  }

  if (fullName.value == "") {
    window.alert("Please enter full name.");
    fullname.focus();

    return false;
  }

  if (username.value == "") {
    window.alert("Please enter username.");
    username.focus();

    return false;
  }

  if (email.value == "") {
    window.alert("Please enter email.");
    email.focus();

    return false;
  }

  if (phoneNumber.value == "") {
    window.alert("Please enter phone number.");
    email.focus();

    return false;
  }

  if (pw.value == "") {
    window.alert("Please enter password.");
    pw.focus();

    return false;
  }

  /**if (pw.length < 6) {
    window.alert(
      "Password should have a minimum of 6 and maximum of 10 characters only."
    );
    pw.focus();

    return false;
  }

  if (pw.length > 10) {
    window.alert(
      "Password should have a minimum of 6 and maximum of 10 characters only."
    );
    pw.focus();

    return false;
  }**/

  if (cpw.value == "") {
    window.alert("Please confirm password.");
    cpw.focus();

    return false;
  }

  if (pw.value != cpw.value) {
    window.alert("Password mismatch.");
    pw.focus();

    return false;
  }

  if (country.value == "") {
    window.alert("Please enter your country.");
    cpw.focus();

    return false;
  }

  if (terms.checked === false) {
    window.alert("Please check the box if you want to proceed.");
    terms.focus();

    return false;
  }

  return true;
}
