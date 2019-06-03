document.getElementById('viagensData').addEventListener(`change`, () => {
    console.log(document.getElementById(`viagensData`).value); //2018-06-18

    var data = (document.getElementById('viagensData').value).split(`-`)

    var dataFormatada = `${data[2]}/${data[1]}/${data[0]}`
    console.log(dataFormatada);
    

    firebase.database().ref('viagens/').on('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            console.log(snapshot.val()[i].dtSaida);
            
            if (dataFormatada == snapshot.val()[i].dtSaida) {
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


})