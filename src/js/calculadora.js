//Criando referencia e atribuindo evento ao o botão calcular
let btnCalcular = document.getElementById('btn-calcular');
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
    
    if(!!economiaAnual){
        if(economiaAnual > 0){
            alert('Isso é o quanto você pode economizar por ano mudando para um veículo elétrico!\nR$ ' + economiaAnual);
        } else {
            alert('A troca para o veículo elétrico não será viável para este caso. Houve um prejuízo de:\nR$ ' + economiaAnual * (-1));
        }
    } else{
        alert('Por favor, preencha todos os campos de entrada!');
    }
}

function calcularKmAnual() {
    //Criando referencias com os inputs 'km'
    let kmSemanaCombustao = document.getElementById('kmSemanaCombustao').value;
    let kmFdsCombustao = document.getElementById('kmFimDeSemanaCombustao').value;
    let kmSemanaEletrico = document.getElementById('kmSemanaEletrico').value;
    let kmFdsEletrico = document.getElementById('kmFimDeSemanaEletrico').value;

    //Levando em consideração 52 semanas no ano, sem contar feriados
    const diasUteis = 260;
    const diasFds = 104;

    //Calculando quilometragem total no ano
    let kmTotalCombustao = (kmSemanaCombustao * diasUteis) + (kmFdsCombustao * diasFds);
    let kmTotalEletrico = (kmSemanaEletrico * diasUteis) + (kmFdsEletrico * diasFds);

    const kmTotal = {
        veiculoCombustao: kmTotalCombustao,
        veiculoEletrico: kmTotalEletrico
    }

    return kmTotal;
}

function calcularGastoAnualGasolina() {
    //Criando referencia com os inputs (km/l) e preço da gasolina
    let consumoGasolina = document.getElementById('consumo-gasolina').value;
    let precoGasolina = document.getElementById('preco-gasolina').value;

    let KmAnualCombustao = calcularKmAnual().veiculoCombustao;

    //Calculando quantidade de litros de gasolina consumidos em um ano
    let litrosGasolinaAnual = KmAnualCombustao/consumoGasolina;
    
    //Calculando gasto em R$ de gasolina em um ano
    let gastoAnualGasolina = litrosGasolinaAnual * precoGasolina;

    return gastoAnualGasolina;
}

function calcularGastoAnual_kWh() {
    //Criando referencia com os inputs (km/kWh) e preço do kWh
    let consumoEletricidade = document.getElementById('consumo-eletricidade').value;
    let preco_kWh = document.getElementById('preco-kWh').value;

    let KmAnualEletrico = calcularKmAnual().veiculoEletrico;

    //Calculando quantidade de kWh consumidos em um ano
    let kWhAnual = KmAnualEletrico/consumoEletricidade;
    
    //Calculando gasto em R$ de kWh em um ano
    let gastoAnual_kWh = kWhAnual * preco_kWh;

    return gastoAnual_kWh;
}