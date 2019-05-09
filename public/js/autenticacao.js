// Botões
var loginUserButton = document.getElementById('loginUserButton');
var createUserButton = document.getElementById('createUserButton');

// Inputs
var userInput = document.getElementById('userInput');
var passwordInput = document.getElementById('passwordInput');

// Autenticar com email e senha
loginUserButton.addEventListener('click', function () {
    firebase
    .auth()
    .signInWithEmailAndPassword(userInput.value, passwordInput.value)
    .then(function (result) {
        console.log(result);
        alert('Autenticado como ' + userInput.value);
        localStorage.user = userInput.value;
        window.location.href = "registro.html";
    })
    .catch(function (error) {
        console.error(error.code);
        console.error(error.message);
        alert("Falha ao autenticar")
    })
})