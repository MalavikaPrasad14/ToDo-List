//form validation
let error1 = document.getElementById('usernamealert');
let error2 = document.getElementById('passwordalert');

let user = document.getElementById('userName');
let pass = document.getElementById('password');

let regex1 = /^admin$/
let regex2 = /^12345$/

function validate(callback) {
    if (regex1.test(user.value)) {
        error1.innerText = 'Valid Username';
        error1.style.color = 'green';
        if (regex2.test(pass.value)) {
            error2.innerText = 'Valid password';
            error2.style.color = 'green';
            callback();
            return true;
        } else {
            error2.innerText = 'enter valid password';
            error2.style.color = 'red';
            return false;
        }

    } else {
        error1.innerText = 'enter valid username';
        error1.style.color = 'red';
        return false;
    }


}

function redirectToMainPage() {
    window.location.href = "main.html"; 
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    validate(redirectToMainPage);
});