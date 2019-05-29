const lista = () => {
    firebase.database().ref('viagens/').on('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            document.getElementById('retorno').innerHTML = document.getElementById('retorno').innerHTML + `
            <br></br>
        <ul class="list-group">
            <li class="list-group-item active">ID: ${i}</li>
            <li class="list-group-item"><strong>Motorista: </strong>${snapshot.val()[i].motorista}</li>
            <li class="list-group-item"><strong>Veículo: </strong>${snapshot.val()[i].veiculo}</li>
            <li class="list-group-item"><strong>Placa: </strong>${snapshot.val()[i].placa}</li>
            <li class="list-group-item"><strong>Finalidade: </strong>${snapshot.val()[i].finalidade}</li>
            <li class="list-group-item"><strong>Hora Saída: </strong>${snapshot.val()[i].hrSaida}</li>
            <li class="list-group-item"><strong>Data Saída: </strong>${snapshot.val()[i].dtSaida}</li>
        </ul>

    <br></br>
        `
        }
    })

}

lista()

    // document.getElementById('retorno').innerHTML = document.getElementById('retorno').innerHTML + 
    // `<option value="${snapshot.val()[i].veiculo}">${snapshot.val()[i].veiculo}</option>`
