const listarVeiculos = () => {
    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            document.getElementById('return').innerHTML = document.getElementById('return').innerHTML + `
            <br></br>
        <ul class="list-group">
            <li class="text-center list-group-item active">${snapshot.val()[i].nomeVeiculo}</li>
            <li class="list-group-item"><strong>Placa: </strong>${snapshot.val()[i].placaVeiculo}</li>
            <li class="list-group-item"><strong>Quilometragem: </strong>${snapshot.val()[i].kmVeiculo}</li>
            <li class="text-center list-group-item">
            <button  type="button" class="btn btn-info"><i class="far fa-edit"></i></button><label>   </label>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></li>
        </ul>
       
    <br></br>
        `
        }
    })

}

listarVeiculos()

function delete_user() {
    var id = document.getElementById('delete').value;

    firebase.database().ref().child('veiculos/' + id).remove();
    window.confirm("Tem certeza que deseja excluir o veículo?")
    alert('Veículo excluído com sucesso!');
}