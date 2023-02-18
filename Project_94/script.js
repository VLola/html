function registration(){
    let email = document.getElementById('input__email');
    let password = document.getElementById('input__password');
    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);
    email.value = "";
    password.value = "";
}

document.addEventListener('DOMContentLoaded', function (e) {
    document.getElementById('button__registration').addEventListener('click', function() {
        registration();
    });
});

