$(document).ready(function() {
  $("#register").click(function() {
    var name = $("#Name").val();
    var school = $("#School").val();
    var email = $("#Email").val();
    var phone = $("phone").val();
    var password = $("#psw").val();
    var cpassword = $("#cpassword").val();
    if (name == '' || school = '' || email == '' || phone = '' || password == '' || cpassword == '') {
      alert("Please fill all fields...!!!!!!");
    } else if ((password.length) < 8) {
      alert("Password should atleast 8 character in length...!!!!!!");
    } else if (!(password).match(cpassword)) {
      alert("Your passwords don't match. Try again?");
    } else {
      $.post("register.php", {
        name1: name,
        school1: school,
        email1: email,
        phone1: phone,
        password1: password
}, function(data) {
  if (data == 'You have Successfully Registered.....') {
    $("form")[0].reset();
  }
  alert(data);
});
}
});
});
