// Cadastro de Veículos
// var d = new Date();
// var t = d.getTime();
// var counter = t;

document.getElementById("form").addEventListener("submit", (e) => {
    var nomeVeiculo = document.getElementById("nomeVeiculo").value;
    var placaVeiculo = document.getElementById("placaVeiculo").value;
    var kmVeiculo = document.getElementById("kmVeiculo").value;
    e.preventDefault();
    cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo);
    form.reset();
});

// async function cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo) {

//     await firebase.database().ref("veiculos/" + 1).set({
//         nomeVeiculo: nomeVeiculo,
//         placaVeiculo: placaVeiculo,
//         kmVeiculo: kmVeiculo
//     });
// }


async function cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo) {
    let id
    await firebase.database().ref('veiculos/').once('value', function (snapshot) {
        id = snapshot.numChildren() 
        sessionStorage.id = id
    })
console.log(id);

    await firebase.database().ref("veiculos/" + id).set({
        id: id,
        nomeVeiculo: nomeVeiculo,
        placaVeiculo: placaVeiculo,
        kmVeiculo: kmVeiculo
    });

    alert('Veiculo cadastrado com sucesso!');
    window.location.href = ""
}
