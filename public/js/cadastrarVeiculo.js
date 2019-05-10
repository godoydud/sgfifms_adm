// Cadastro de Veículos
// var d = new Date();
// var t = d.getTime();
// var counter = t;

document.getElementById("form").addEventListener("submit", (e) =>{
    var nomeVeiculo = document.getElementById("nomeVeiculo").value;
    var placaVeiculo = document.getElementById("placaVeiculo").value;
    var kmVeiculo = document.getElementById("kmVeiculo").value;
    e.preventDefault();
    cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo);
    form.reset();
});

async function cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo){

    await firebase.database().ref("veiculos/" + 1).set({
        nomeVeiculo: nomeVeiculo,
        placaVeiculo: placaVeiculo,
        kmVeiculo: kmVeiculo
    });
}

const buscaTamanho = async() => {
    await firebase.database().ref('veiculos/').once('value', function(snapshot) {
        id = snapshot.val().length
        console.log(snapshot.val());

        console.log(`Id: ${id}`);


    })
}

buscaTamanho()

async function cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo) {

    console.log(id);

    await firebase.database().ref("veiculos/" + id).set({
        id: id,
        nomeVeiculo: nomeVeiculo,
        placaVeiculo: placaVeiculo,
        kmVeiculo: kmVeiculo
        
    });

    alert('Veiculo cadastrado com sucesso!');
    sessionStorage.id = id;
    console.log(sessionStorage.id);

    window.location.href = ""
}
