var teste

const listarVeiculos = () => {
    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        let veiculos = (Object.entries(snapshot.val()))
teste = veiculos
        console.log(veiculos);
        
        
        let ul, li =[], button = []
        for (let i = 0; i < veiculos.length; i++) {
            ul = document.createElement('ul') 
            ul.id = veiculos[i][1].id
            li[0] = document.createElement('li')
            li[1] = document.createElement('li')
            li[2] = document.createElement('li')
            li[3] = document.createElement('li')
            button[0] = document.createElement('button')
            button[1] = document.createElement('button')
            ul.className = 'list-group'
            li[0].className = 'text-center list-group-item active'
            li[0].innerHTML = `${veiculos[i][1].nomeVeiculo}`
            li[1].className = 'list-group-item'
            li[1].innerHTML = `<strong>Placa: </strong>${veiculos[i][1].placaVeiculo}`
            li[2].className = 'list-group-item'
            li[2].innerHTML = `<strong>Quilometragem: </strong>${veiculos[i][1].kmVeiculo}`
            li[3].className = 'text-center list-group-item'
            li[3].innerHTML = ' '
       //     li[2].innerHTML =(document.createTextNode(snapshot.val()[i].kmVeiculo))
            button[0].className = 'btn btn-info'
            button[1].className = 'btn btn-danger'
            button[0].type = 'button'
            button[1].type = 'button'
            button[0].innerHTML = 'Editar'
            button[1].innerHTML = 'Deletar'
            button[0].addEventListener('click', () => {
                // Função de editar veículo
                
                window.location.replace('editarVeiculo.html')
                
            }) 
            button[1].addEventListener('click', (event) => {
                // Função de deletar veículo
                var r = confirm("Deseja deletar o veículo selecionado?");
                if (r == true) {
                alert("Veículo deletado com sucesso!")
                delete_user(event.target.parentElement)
                } else {
                alert("Você cancelou a exclusão.")
                }
            }) 

            li[3].appendChild(button[0])
            li[3].appendChild(button[1])
            ul.appendChild(li[0])
            ul.appendChild(li[1])
            ul.appendChild(li[2])
            ul.appendChild(li[3])


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
   
 let ul = element.parentElement;
 
    console.log(ul.id);
    
    firebase.database().ref().child('veiculos/' + ul.id).remove();
    //window.confirm("Tem certeza que deseja excluir o veículo?")
    //alert('Veículo excluído com sucesso!');

}

function update_user(elementId) {
    window.location.replace('editarVeiculo.html')

    const preencheDados = () => {


        let db = firebase.database().ref(`veiculos/${sessionStorage.id}`)
        db.on('value', (snapshot) => {
            document.getElementsByTagName('input')[0].value = snapshot.val().nomeVeiculo
            document.getElementsByTagName('input')[1].value = snapshot.val().placaVeiculo
            document.getElementsByTagName('input')[2].value = snapshot.val().kmVeiculo
        })
    }
    
    
    window.onload = preencheDados()
    
}