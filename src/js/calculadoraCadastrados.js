var localStorage = Window.localStorage; 
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
    let idVeiculo = document.getElementById('lista-carrosCombustao').value;
    let veiculo = JSON.parse(localStorage.getItem(idVeiculo));
    console.log(idVeiculo);
    console.log(veiculo);
    //Criando referencia com os inputs (km/l) e preço da gasolina
    let consumoGasolina = veiculo.consumoMedio;
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
    let idVeiculo = document.getElementById('lista-carrosEletricos').value;
    let veiculo = JSON.parse(localStorage.getItem(idVeiculo));
    //Criando referencia com os inputs (km/kWh) e preço do kWh
    let consumoEletricidade = veiculo.consumoMedio;
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
    let idVeiculoEletrico = document.getElementById('lista-carrosEletricos').value;
    let veiculoEletrico = JSON.parse(localStorage.getItem(idVeiculoEletrico));
    let idVeiculo = document.getElementById('lista-carrosEletricos').value;
    let veiculo = JSON.parse(localStorage.getItem(idVeiculo));
    let valorVeiculoEletrico = veiculoEletrico.preco;
    let valorVeiculoCombustao = veiculo.preco;

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
function carregarVeiculos(){
    var select = document.getElementById("lista-carrosEletricos"); 
    var keys = Object.keys(localStorage);
    keys.forEach(function(chave, pos){
        let objeto = JSON.parse(localStorage.getItem(chave));
        if(objeto.categoria =="eletrico" ){
            console.log(objeto);
            var option = document.createElement("option");
            option.text = objeto.nome;
            option.value = objeto.id;
            select.add(option);
        }
    });

    select = document.getElementById("lista-carrosCombustao"); 
    keys.forEach(function(chave, pos){
        let objeto = JSON.parse(localStorage.getItem(chave));
        if(objeto.categoria =="combustao"  || objeto.categoria =="hibrido"){
            console.log(objeto);
            var option = document.createElement("option");
            option.text = objeto.nome;
            option.value = objeto.id;
            select.add(option);
        }
    });
}

//criando referencia para cada "div informaçoes" relacionados aos icones (?)
let divInformacoesList = document.getElementsByClassName('informacoes');
//criando referencia para cada icone (?) de informações
let iconeInfoList = document.getElementsByClassName('calculadora-iconeInfo');
//atribuindo evento click em cada iconeInfo e passando como parâmentro para a função a referência da divContainer pai de cada iconeInfo
for (let i = 0; i < iconeInfoList.length; i++) {
    iconeInfoList[i].addEventListener('click', function() {
        renderizarInformacoesInput(divInformacoesList[i])
    });
}

function renderizarInformacoesInput(divInfo) {
    let atributoStyle = divInfo.getAttribute('style');
    if(atributoStyle === 'display: block;'){
        divInfo.style.display = 'none';
    } else {
        divInfo.style.display = 'block';
    }

}
    