const listaVeiculosPorData = () => {
    console.log("Entrou na listagem de veìculos por data");

    firebase.database().ref('viagens/').once('value', function (snapshot) {
        let viagens = (Object.entries(snapshot.val()))
        for (let i = 0; i < viagens.length; i++) {
            console.log(snapshot.val());

            document.getElementById('dataViagens').innerHTML = document.getElementById('dataViagens').innerHTML +
                
        }
    })

}

listaVeiculosPorData()