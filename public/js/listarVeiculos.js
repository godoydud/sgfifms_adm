const listarVeiculos = () => {
    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        let ul, li =[], button = []
        for (let i = 1; i < snapshot.val().length; i++) {
            ul = document.createElement('ul')
            ul.id = snapshot.val()[i].idVeiculo
            li[0] = document.createElement('li')
            li[1] = document.createElement('li')
            li[2] = document.createElement('li')
            button[0] = document.createElement('button')
            button[1] = document.createElement('button')
            li[0].className = 'text-center list-group-item active'
            li[0].innerHTML = `${snapshot.val()[i].nomeVeiculo}`
            li[1].className = 'text-center list-group-item'
            li[1].innerHTML = `<strong>Placa: </strong>${snapshot.val()[i].placaVeiculo}`
            li[2].className = 'text-center list-group-item'
            li[2].innerHTML =(document.createTextNode(snapshot.val()[i].kmVeiculo))
            button[0].className = 'btn btn-info'
            button[1].className = 'btn btn-danger'
            button[0].type = 'button'
            button[1].type = 'button'
            button[0].innerHTML = '<i class="far fa-edit"></i>'
            button[1].innerHTML = '<i class="far fa-trash-alt"></i>'
            button[0].addEventListener('click', () => {
                // Função de editar veículo
            }) 
            button[1].addEventListener('click', (event) => {
                // Função de deletar veículo
                delete_user(event.target.parent)
            }) 

            li[2].appendChild(button[0])
            li[2].appendChild(button[1])
            ul.appendChild(li[0])
            ul.appendChild(li[1])
            ul.appendChild(li[2])


            document.getElementById('return').appendChild(ul)
/*
            .innerHTML = document.getElementById('return').innerHTML + `
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
        ` */
        }
    })

}

listarVeiculos()

function delete_user(element) {
 let ul = element.parent;

    firebase.database().ref().child('veiculos/' + ul.id).remove();
    window.confirm("Tem certeza que deseja excluir o veículo?")
    alert('Veículo excluído com sucesso!');
}