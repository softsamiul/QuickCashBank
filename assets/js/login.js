const userEmail = 'isamiul146@gmail.com';
const userPassword = 1234;

function getInpValue(inputId) {
    const input = document.getElementById(inputId);
    const inpValue = input.value;
    return inpValue;
}
document.getElementById('login-btn').addEventListener('click', function() {
    const email = getInpValue('input-email');
    const password = Number(getInpValue('input-password'));

    console.log(email);
    console.log(password);


    if (email == userEmail && password == userPassword) {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});