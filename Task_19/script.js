
function SelectCheckBox(){
    let check = $("#typeCheckBox:checked").is(":checked");
    if(check !== true){
        $("#textCheckBox").text("Don't have an account? Register");
        $("#typeButton").text("Login");
        $("#typeTitle").text("Login");
    }
    else{
        $("#textCheckBox").text("Do you have an account? Login");
        $("#typeButton").text("Register");
        $("#typeTitle").text("Registration");
    }
    ReloadSettings();
}

function ReloadSettings(){
    $("#typeText").text("Please enter your email and password!").css('color', 'white');
}

function ErrorPassword(){
    $("#typeText").text("Password incorrect!").css('color', 'red');
}

function ErrorEmail(){
    $("#typeText").text("Email incorrect!").css('color', 'red');
}

function Ok(){
    $("#typeText").text("Successfully").css('color', 'green');
}

function LogRegistration(data){
    if(data == 201){
        $("#typeText").text("Successfully registration").css('color', 'green');
        Clear();
    }
    else if(data == 400){
        $("#typeText").text("Bad request").css('color', 'red');
    }
    else if(data == 409){
        $("#typeText").text("Account exists").css('color', 'red');
    }
    else{
        $("#typeText").text("Error registration").css('color', 'red');
    }
    
    console.log(data);
}


function LogLogin(data){
    if(data == 200){
        $("#typeText").text("Successfully login").css('color', 'green');
        Clear();
    }
    else{
        $("#typeText").text("Error login").css('color', 'red');
    }
    
    console.log(data);
}

function Clear(){
    $("#typeEmail").val("");
    $("#typePassword").val("");
}

function Click() { 
    ReloadSettings();
    let check = $("#typeCheckBox:checked").is(":checked");
    let email = $("#typeEmail").val();
    let password = $("#typePassword").val();
    if(Validate(password)){
        if(check !== true){
            Login(email, password);
        }
        else{
            Registration(email, password);
        }
    }
 }

 function Registration(email, password){
    // $.post( "https://localhost:7013/User/Add",
    $.post( "http://vbu011valentyn-001-site1.htempurl.com/User/Add",
    {
        name: email,
        password: password,
        token: "token",
    }).done(function(data) {
        LogRegistration(data);
    });
 }

 function Login(email, password){
    // $.post( "https://localhost:7013/User/Login",
    $.post( "http://vbu011valentyn-001-site1.htempurl.com/User/Login",
    {
        name: email,
        password: password,
        token: "token"
    }).done(function(data) {
        LogLogin(data);
    });
 }

 function Repassword(email, password){
    // $.post( "https://localhost:7013/User/Repassword",
    $.post( "http://vbu011valentyn-001-site1.htempurl.com/User/Repassword",
    {
        name: email,
        password: password,
        token: "token"
    }).done(function(data) {
        if(data == 200){
            $("#typeForgotPasswordText").text("Password changed successfully!").css('color', 'green');
        }
        else{
            $("#typeForgotPasswordText").text("Password change error!").css('color', 'red');
        }
    });
 }

 function SavePassword(){
    let email = $("#typeEmailForgot").val();
    let password = $("#typeNewPassword").val();
    if(ValidateEmailNewPassword()){
        if(ValidatePassword(password)){
            Repassword(email, password);
        }
        else{
            $("#typeForgotPasswordText").text("Password incorrect!").css('color', 'red');
        }
    }
    else{
        $("#typeForgotPasswordText").text("Email incorrect!").css('color', 'red');
    }
 }

 function Validate(password){
    if(ValidateEmail()){
        if(ValidatePassword(password)){
            return true;
        }
        else{
            ErrorPassword();
            return false;
        }
    }
    else{
        ErrorEmail();
        return false;
    }
 }

 function ValidateEmail() {
    return $("#typeEmail").is(':valid');
  }
  
function ValidateEmailNewPassword() {
    return $("#typeEmailForgot").is(':valid');
  }
  
function ValidatePassword(password) {
    return password.length > 7;
  }

  function ForgotPasswordVisible(){
    $("#formLogin").animate({
        opacity: 0
      }, 1000, function() {
        $("#formLogin").hide();
        $("#formForgotPassword").show();
        $("#formForgotPassword").animate({
            opacity: 1
        }, 1000);
      });
    
}
function ForgotPasswordHidden(){
    $("#formForgotPassword").animate({
        opacity: 0
    }, 1000, function() {
        $("#formForgotPassword").hide();
        $("#formLogin").show();
        $("#formLogin").animate({
            opacity: 1
        }, 1000);
      });
}

document.addEventListener('DOMContentLoaded', (e) => {

    $("#typeCheckBox").click(function() {
        SelectCheckBox();
    });

    $("#typeButton").click(function() {
        Click();
    });

    $("#typeA").click(function() {
        ForgotPasswordVisible();
    });

    $("#typeButtonCloseForm").click(function() {
        ForgotPasswordHidden();
    });

    $("#typeButtonSavePassword").click(function() {
        SavePassword();
    });

    $("#formForgotPassword").hide().css("opacity", "0");
    
});