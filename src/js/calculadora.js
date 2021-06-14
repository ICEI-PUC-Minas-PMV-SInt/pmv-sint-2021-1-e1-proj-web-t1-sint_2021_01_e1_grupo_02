//Criando um Modal
let myModal = new bootstrap.Modal(document.getElementById('myModal'));

//Criando referencians ao modal e ao body do mesmo
let myModalEl = document.getElementById('myModal');
let modalBody = document.querySelector('.modal-body');

//Criando referencia e atribuindo evento ao o botão calcular
let btnCalcular = document.querySelector('.index-button');
btnCalcular.addEventListener('click', calcularEconomia);

// Função para calculo da economia anual
function calcularEconomia() {
    let kmAnual = calcularKmTotal().toLocaleString('pt-br', {minimumFractionDigits: 0});
    let gastoGasolina = calcularGastoAnualGasolina().gastoAnualGasolina;
    let consumoLitrosGasolina = calcularGastoAnualGasolina().litrosGasolinaAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
    let gasto_kWh = calcularGastoAnual_kWh().gastoAnual_kWh;
    let consumo_kWh = calcularGastoAnual_kWh().kWhAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
    let buyback = calcularBuyback(gasto_kWh, gastoGasolina);

    let economiaAnual = gastoGasolina - gasto_kWh;

    let _input = document.getElementsByTagName('input');
    for(let i = 0; i < _input.length; i++) {
        _input[i].value = null;
    }

    renderizarModal(economiaAnual, kmAnual, consumo_kWh, gasto_kWh, consumoLitrosGasolina, gastoGasolina, buyback);
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

    let kmAnual = calcularKmTotal();

    //Calculando quantidade de litros de gasolina consumidos em um ano
    let litrosGasolinaAnual = kmAnual/consumoGasolina;
    
    //Calculando gasto em R$ de gasolina em um ano
    let gastoAnualGasolina = litrosGasolinaAnual * precoGasolina;

    return {
        gastoAnualGasolina,
        litrosGasolinaAnual
    };
}

function calcularGastoAnual_kWh() {
    //Criando referencia com os inputs (km/kWh) e preço do kWh
    let consumoEletricidade = document.getElementById('consumo-eletricidade').value;
    let preco_kWh = document.getElementById('preco-kWh').value;

    let kmAnual = calcularKmTotal();

    //Calculando quantidade de kWh consumidos em um ano
    let kWhAnual = kmAnual/consumoEletricidade;
    
    //Calculando gasto em R$ de kWh em um ano
    let gastoAnual_kWh = kWhAnual * preco_kWh;

    return {
        gastoAnual_kWh,
        kWhAnual
    }
}

function calcularBuyback(gasto_kWh, gastoGasolina) {
    let valorVeiculoEletrico = document.getElementById('valor-carroEletrico').value;
    let valorVeiculoCombustao = document.getElementById('valor-carroCombustao').value;

    let diferenca = valorVeiculoEletrico - valorVeiculoCombustao;

    let economiaMensal = (gastoGasolina - gasto_kWh)/12;

    let meses = Math.ceil(diferenca/economiaMensal);

    return meses;
}

function renderizarModal(economiaAnual, kmAnual, consumo_kWh, gasto_kWh, consumoGasolina, gastoGasolina, buyback) {
    //Criando os elementos e inserindo seus conteúdos e estilos
    let p = document.createElement('p');

    if(!!economiaAnual){
        let divResultado = document.createElement('div');
        divResultado.className = 'modal-resultadoEconomia';
        
        if(economiaAnual > 0){
            p.textContent = 'Isso é o quanto você pode economizar por ano mudando para um veículo elétrico!';
            divResultado.textContent = economiaAnual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        } else {
            p.textContent = 'A troca para o veículo elétrico não será viável para este caso. Houve um prejuízo de';
            divResultado.textContent = (economiaAnual * (-1)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }

        modalBody.appendChild(p);
        modalBody.appendChild(divResultado);
    
        let subtitle = document.createElement('h5');
        subtitle.textContent = 'Outras informações';
        modalBody.appendChild(subtitle);
    
        let p_kmAnual = document.createElement('p');
        p_kmAnual.textContent = 'Quilômetros dirigidos por ano - ' + kmAnual + ' km';
        modalBody.appendChild(p_kmAnual);
        
        
        let div_veiculoEletrico = document.createElement('div');
        let title_veiculoEletrico = document.createElement('h5');
        title_veiculoEletrico.textContent = 'Veículo elétrico';
        div_veiculoEletrico.appendChild(title_veiculoEletrico);
        let p_kWhUsados = document.createElement('p');
        p_kWhUsados.textContent = 'kWh usados por ano - ' + consumo_kWh + ' kWh';
        div_veiculoEletrico.appendChild(p_kWhUsados);
        let p_custokWhAnual = document.createElement('p');
        p_custokWhAnual.textContent = 'Custo anual com eletricidade - R$ ' + gasto_kWh.toLocaleString('pt-br', {maximumFractionDigits: 2});
        div_veiculoEletrico.appendChild(p_custokWhAnual);
    
        let div_veiculoCombustao = document.createElement('div');
        let title_veiculoCombustao = document.createElement('h5');
        title_veiculoCombustao.textContent = 'Veículo a combustão';
        div_veiculoCombustao.appendChild(title_veiculoCombustao);
        let p_GasolinaUsada = document.createElement('p');
        p_GasolinaUsada.textContent = 'Litros usados por ano - ' + consumoGasolina + ' litros';
        div_veiculoCombustao.appendChild(p_GasolinaUsada);
        let p_custoGasolinaAnual = document.createElement('p');
        p_custoGasolinaAnual.textContent = 'Custo anual de combustível - R$ ' + gastoGasolina.toLocaleString('pt-br', {maximumFractionDigits: 2});
        div_veiculoCombustao.appendChild(p_custoGasolinaAnual);
    
        let div_veiculosContainer = document.createElement('div');
        div_veiculosContainer.className = 'modal-containerVeiculos';
        div_veiculosContainer.appendChild(div_veiculoEletrico);
        div_veiculosContainer.appendChild(div_veiculoCombustao);
        modalBody.appendChild(div_veiculosContainer);
        
        if(economiaAnual > 0 && !(buyback === 0)){
            let p_buyback = document.createElement('p');
            p_buyback.textContent = 'Com a economia, a diferença do valor entre o veículo elétrico e o veículo a combustão é pago em ' + buyback + ' meses com o perfil de uso informado!';
            modalBody.appendChild(p_buyback);
        }
         
    } else{
        p.textContent = 'Por favor, preencha todos os campos de entrada!';
        modalBody.appendChild(p);
    }

     //Renderizando o modal na tela
     myModal.toggle();

     //removendo o conteudo do modal após ser retirado da tela
     myModalEl.addEventListener('hidden.bs.modal', function () {
        modalBody.innerText = '';
     })
}