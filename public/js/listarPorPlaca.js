const listaVeiculos = () => {
    console.log("Entrou na listagem de veìculos");

    firebase.database().ref('veiculos/').once('value', function (snapshot) {
        let veiculos = (Object.entries(snapshot.val()))
        for (let i = 0; i < veiculos.length; i++) {
            console.log(snapshot.val());

            document.getElementById('veiculos').innerHTML = document.getElementById('veiculos').innerHTML +
                `<option value="${veiculos[i][1].placaVeiculo}">${veiculos[i][1].placaVeiculo}</option>`
        }
    })

}

listaVeiculos()

const criarCards = () => {
    console.log(`Entrou aqui`);
    console.log(document.getElementsByTagName(`select`)[0].value);
    
    
    let placa = document.getElementsByTagName(`select`)[0].value

    firebase.database().ref('viagens/').once('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            console.log(snapshot.val().placa);
            
            if (placa == snapshot.val()[i].placa) {
                console.log(snapshot.val().placa);
                document.getElementById('return').innerHTML = document.getElementById('return').innerHTML + `
            <br></br>
        <ul class="list-group">
            <li class="list-group-item active">ID: ${i}</li>
            <li class="list-group-item"><strong>Motorista: </strong>${snapshot.val()[i].motorista}</li>
            <li class="list-group-item"><strong>Veículo: </strong>${snapshot.val()[i].veiculo}</li>
            <li class="list-group-item"><strong>Placa: </strong>${snapshot.val()[i].placa}</li>
            <li class="list-group-item"><strong>Finalidade: </strong>${snapshot.val()[i].finalidade}</li>
            <li class="list-group-item"><strong>Hora Saída: </strong>${snapshot.val()[i].hrSaida}</li>
            <li class="list-group-item"><strong>Data Saída: </strong>${snapshot.val()[i].dtSaida}</li>
            <li class="list-group-item"><strong>Hora Chegada: </strong>${snapshot.val()[i].hrChegada}</li>
            <li class="list-group-item"><strong>Data Chegada: </strong>${snapshot.val()[i].dtChegada}</li>
        </ul>

    <br></br>
        `
            }
        }
    })
}
