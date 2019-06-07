// Botões
var loginUserButton = document.getElementById('loginUserButton');
var createUserButton = document.getElementById('createUserButton');

// Inputs
var userInput = document.getElementById('userInput');
var passwordInput = document.getElementById('passwordInput');
 

    

// Autenticar com email e senha
loginUserButton.addEventListener('click', function () {
   if(userInput.value != "eduardo.fuso@novaandradina.org"){     
        alert("Esse usuário não possui privilégios de administrador!")
        window.location.replace('autenticacao.html')
    }
    firebase
    .auth()
    .signInWithEmailAndPassword(userInput.value, passwordInput.value)
    .then(function (result) {
        console.log(result);
        alert('Autenticado como ' + userInput.value);
        localStorage.user = userInput.value;
        window.location.href = "index.html";
    })
    .catch(function (error) {
        console.error(error.code);
        console.error(error.message);
        alert("Falha ao autenticar")
    })
})
