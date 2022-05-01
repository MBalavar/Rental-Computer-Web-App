

function hideshow() { 
  document.getElementById("masterPage").setAttribute("style","diplsay:block:");
  document.getElementById("logout").setAttribute("style","diplsay:block:");
  var userpass = document.getElementById("login");
var masterpg = document.getElementById("masterpage");
var signout = document.getElementById("c");
if (userpass.style.display === "none") {
userpass.style.display = "show";
} else {
  userpass.style.display = "none";
}

function rego(){
  window.alert("You registered sucessfully.")
}
}
  /*

$(document).ready(function(){
  document.getElementById("masterPage").setAttribute("style","diplsay:block:");
})
\
 
  
if (masterpg.style.display === "none") {
  masterpg.style.display = "show";
  } else {
    masterpg.style.display = "none";
  }
  if (signout.style.display === "none") {
    signout.style.display = "show";
    } else {
      signout.style.display = "none";
    }


var userpass = document.getElementById("login");
var masterpg = document.getElementById("masterpage");
var signout = document.getElementById("logout");
if (userpass.style.display === "none") {
userpass.style.display = "show";
} else {
  userpass.style.display = "none";
}
if (masterpg.style.display === "none") {
  masterpg.style.display = "show";
  } else {
    masterpg.style.display = "none";
  }
  if (signout.style.display === "none") {
    signout.style.display = "show";
    } else {
      signout.style.display = "none";
    }
 








function LoggedIn(){
  $('.logedIn').css('display', 'none');
  $('#masterPage').css('display', 'block');
  
 
};
$('form button[type="submit"]').on('click', function () {
  $('.hide-show span').text('Show').addClass('show');
  $('.hide-show').parent().find('input[name="login[password]"]').attr('type', 'password');
});

$(document).ready(function () {
//When we submit the form with class = "regiForm" it will validate the field.
$('.regiForm').on('submit', function(){
  $('#regiModal').modal('show');
  //Check the username field
  if($('#fname').val() ==""){
    $('#msg').html('Please enter your first name').css('color', 'red');
    return false;
    //Check the password field
  } else if ($('#lname').val() ==""){
    $('#msg').html('Please enter your last name').css('color', 'red');
    return false;
    //Check the selection of race
  } else if ($('#race').val() ==""){
    $('#msg').html('Please select the race you want to participate in').css('color', 'red');
    return false;
  }  else if ($('#email').val() ==""){
    $('#msg').html('Please enter your email').css('color', 'red');
    return false;
  }     else if ($('#password').val() == ""){
    $('#msg').html('Please enter password').css('color', 'red');
    return false;
    //Check the confirmed password field
  } else if ($('#confirm_password').val() == ""){
    $('#msg').html('Please confirm the password again').css('color', 'red');
    return false;
    //Check whether the retyped password matches the password
  } else if ($('#password').val()!=$('#confirm_password').val()){
    $('#msg').html('Password do not match').css('color', 'red');
    return false;
    //Check the email field
  } else if ($('#division').val() ==""){
    $('#msg').html('Please select your age group').css('color', 'red');
    return false;
    //Check whether a user agreed or not
  } else {
    $('#msg').html('Successfully Completed!').css('color', 'green');
  }
});
});
*/