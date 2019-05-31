// Cadastro de Veículos
var d = new Date();
var t = d.getTime();
var counter = t;

 document.getElementById("form").addEventListener("submit", (e) =>{
    var nomeVeiculo = document.getElementById("nomeVeiculo").value;
    var placaVeiculo = document.getElementById("placaVeiculo").value;
    var kmVeiculo = document.getElementById("kmVeiculo").value;
    e.preventDefault();
    cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo);
    form.reset();
});

 async function cadastrarVeiculo(nomeVeiculo, placaVeiculo, kmVeiculo){

     await firebase.database().ref("veiculos/" + counter).set({
        id: counter,
        nomeVeiculo: nomeVeiculo,
        placaVeiculo: placaVeiculo,
        kmVeiculo: kmVeiculo
    });

     alert('Veículo cadastrado com sucesso!');
    localStorage.id = counter;
   
}