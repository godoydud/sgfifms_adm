// Criar novo usuário
createUserButton.addEventListener('click', function () {
    if(passwordInput.value != passwordInput2.value){
            alert("As senhas não conferem")
            window.location.href = "cadastrarUser.html"
        }
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        
        .then(function () {
            alert('Bem Vindo ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar')
        })
})