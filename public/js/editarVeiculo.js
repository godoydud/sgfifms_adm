
const preencheDados = () => {


    let db = firebase.database().ref(`veiculos/${sessionStorage.idVeiculo}`)
    db.on('value', (snapshot) => {
        document.getElementsByTagName('input')[0].value = snapshot.val().nomeVeiculo
        document.getElementsByTagName('input')[1].value = snapshot.val().placaVeiculo
        document.getElementsByTagName('input')[2].value = snapshot.val().kmVeiculo
    })
}




window.onload = preencheDados()



const atualizaDados = async() => {

        await firebase.database().ref(`veiculos/${sessionStorage.idVeiculo}`).set({
            id: sessionStorage.idVeiculo,
            nomeVeiculo: document.getElementsByTagName('input')[0].value,
            placaVeiculo: document.getElementsByTagName('input')[1].value,
            kmVeiculo: document.getElementsByTagName('input')[2].value,

        })
       

        window.location.replace("listarVeiculos.html");
    alert('Veículo editado com sucesso!')
    }


    document.getElementById('editar').addEventListener('click', async() => {
    event.preventDefault()
    await atualizaDados()
    

})

    



