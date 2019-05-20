const listaVeiculos = () => {
    console.log("Entrou na listagem de veìculos");

    firebase.database().ref('veiculos/').once('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            console.log(snapshot.val());

            document.getElementById('veiculos').innerHTML = document.getElementById('veiculos').innerHTML +
                `<option value="${snapshot.val()[i].placaVeiculo}">${snapshot.val()[i].placaVeiculo}</option>`
        }
    })

}

listaVeiculos()

const criarCards = () => {
    let placa = document.getElementsByTagName(`select`)[0].value

    firebase.database().ref('veiculos/').once('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            console.log(snapshot.val());

            if (placa == snapshot.val()[i].placa) {
                document.getElementById('retorno').innerHTML = document.getElementById('retorno').innerHTML + `
            <br></br>
        <ul class="list-group">
            <li class="list-group-item active">ID: ${i}</li>
            <li class="list-group-item"><strong>Motorista: </strong>${snapshot.val()[i].motorista}</li>
            <li class="list-group-item"><strong>Veículo: </strong>${snapshot.val()[i].veiculo}</li>
            <li class="list-group-item"><strong>Placa: </strong>${snapshot.val()[i].placa}</li>
            <li class="list-group-item"><strong>Finalidade: </strong>${snapshot.val()[i].finalidade}</li>
        </ul>

    <br></br>
        `
            }
        }
    })
}
