function checkValidates() {
  var username = document.forms["RegForm"]["username"];
  var pw = document.forms["RegForm"]["password"];

  if (username.value == "") {
    window.alert("Please enter username.");
    username.focus();

    return false;
  }

  if (pw.value == "") {
    window.alert("Please enter password.");
    pw.focus();

    return false;
  }

  if (username.value != "juandc") {
    window.alert("Username does not exist.");
    username.focus();
    return false;
  }

  if (pw.value != "juandc123" && username.value == "juandc") {
    window.alert("Wrong password.");
    pw.focus();
    return false;
  }

  return true;
}
