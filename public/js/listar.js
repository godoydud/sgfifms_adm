const lista = () => {
    firebase.database().ref('viagens/').on('value', function(snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            //    if(placa == snapshot.val()[i].placa)
            document.getElementById('retorno').innerHTML = document.getElementById('retorno').innerHTML + `
        <div class="x">
        <p>${i}</p>
        <p>${snapshot.val()[i].motorista}</p>
        <p>${snapshot.val()[i].placa}</p>
        <p>${snapshot.val()[i].veiculo}</p>
        <p>------------------------------------</p>
    </div>
        `
        }
    })

}

lista()