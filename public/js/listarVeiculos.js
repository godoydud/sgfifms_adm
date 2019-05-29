
const listarVeiculos = () => {
    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        let veiculos = (Object.entries(snapshot.val()))

        
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
            ul.className = 'padding0'
            li[0].className = 'text-center list-group-item active'
            li[0].innerHTML = `${veiculos[i][1].nomeVeiculo}`
            li[1].className = 'list-group-item'
            li[1].innerHTML = `<strong>Placa: </strong>${veiculos[i][1].placaVeiculo}`
            li[2].className = 'list-group-item'
            li[2].innerHTML = `<strong>Quilometragem: </strong>${veiculos[i][1].kmVeiculo}`
            li[3].className = 'text-center list-group-item'
            li[3].innerHTML = ' '
            button[0].className = 'marginBtn btn btn-info'
            button[1].className = 'marginBtn btn btn-danger'
            button[0].type = 'button'
            button[1].type = 'button'
            button[0].innerHTML = 'Editar'
            button[1].innerHTML = 'Deletar'
            button[0].addEventListener('click', (event) => {
                // Função de editar veículo
                let ul = event.target.parentElement.parentElement;
                
                
                
                sessionStorage.idVeiculo = ul.id
                window.location.replace('editarVeiculo.html')
            }) 
            button[1].addEventListener('click', async (event) => {
                let ul = event.target.parentElement.parentElement;
                // Função de deletar veículo
                var r = confirm("Deseja deletar o veículo selecionado?");
                if (r) {
                    
                    await firebase.database().ref().child('veiculos/' + ul.id).remove();
                    alert("Veículo deletado com sucesso!")
                    document.location.reload(true)
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
        }
    })

}

listarVeiculos()

function delete_user(element) {
   
 let ul = element.parentElement;
 
    firebase.database().ref().child('veiculos/' + ul.id).remove();
}