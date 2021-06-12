//Criando um Modal
let myModal = new bootstrap.Modal(document.getElementById('myModal'));

//Criando referencians ao modal e ao body do mesmo
let myModalEl = document.getElementById('myModal');
let modalBody = document.querySelector('.modal-body');

//Criando referencia e atribuindo evento ao o botão calcular
let btnCalcular = document.querySelector('.index-buttonContainer');
btnCalcular.addEventListener('click', calcularEconomia);

// Função para calculo da economia anual
function calcularEconomia() {
    let gastoGasolina = calcularGastoAnualGasolina();
    let gasto_kWh = calcularGastoAnual_kWh();

    let economiaAnual = Number((gastoGasolina - gasto_kWh).toFixed(2));

    let _input = document.getElementsByTagName('input');

    for(let i = 0; i < _input.length; i++) {
        _input[i].value = null;
    }

    let p = document.createElement('p');
    let text;

    if(!!economiaAnual){
        if(economiaAnual > 0){
            text = document.createTextNode('Isso é o quanto você pode economizar por ano mudando para um veículo elétrico! R$ ' + economiaAnual);
        } else {
            text = document.createTextNode('A troca para o veículo elétrico não será viável para este caso. Houve um prejuízo de R$ ' + economiaAnual * (-1));
        }
    } else{
        text = document.createTextNode('Por favor, preencha todos os campos de entrada!');
    }

    p.appendChild(text);
    modalBody.appendChild(p);
    
    myModal.toggle();

    myModalEl.addEventListener('hidden.bs.modal', function () {
        p.remove();
    })
}

function calcularKmTotal() {
    //Criando referencias com os inputs 'km'
    let kmSemana = document.getElementById('kmSemana').value;
    let kmFds = document.getElementById('kmFimDeSemana').value;

    //Levando em consideração 52 semanas no ano, sem contar feriados
    const diasUteis = 260;
    const diasFds = 104;

    //Calculando quilometragem total no ano
    let kmTotal = (kmSemana * diasUteis) + (kmFds * diasFds);

    return kmTotal;
}

function calcularGastoAnualGasolina() {
    //Criando referencia com os inputs (km/l) e preço da gasolina
    let consumoGasolina = document.getElementById('consumo-gasolina').value;
    let precoGasolina = document.getElementById('preco-gasolina').value;

    let KmAnual = calcularKmTotal();

    //Calculando quantidade de litros de gasolina consumidos em um ano
    let litrosGasolinaAnual = KmAnual/consumoGasolina;
    
    //Calculando gasto em R$ de gasolina em um ano
    let gastoAnualGasolina = litrosGasolinaAnual * precoGasolina;

    return gastoAnualGasolina;
}

function calcularGastoAnual_kWh() {
    //Criando referencia com os inputs (km/kWh) e preço do kWh
    let consumoEletricidade = document.getElementById('consumo-eletricidade').value;
    let preco_kWh = document.getElementById('preco-kWh').value;

    let KmAnual = calcularKmTotal();

    //Calculando quantidade de kWh consumidos em um ano
    let kWhAnual = KmAnual/consumoEletricidade;
    
    //Calculando gasto em R$ de kWh em um ano
    let gastoAnual_kWh = kWhAnual * preco_kWh;

    return gastoAnual_kWh;
}