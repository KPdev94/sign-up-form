let password = document.querySelector('#password');
let confPassword = document.querySelector('#conf-password');
let passwordError = document.querySelector('#password-error');


const confirmPassword = () => {
    if (password.value != confPassword.value) {
        passwordError.textContent = "* Passwords do not match";
        password.style.borderColor = 'red';
        confPassword.style.borderColor = 'red';
        console.log('items should change');
    }
    else console.log('no change');
}

let sumbit = document.querySelector('#submit-button');
sumbit.addEventListener('click', confirmPassword);
