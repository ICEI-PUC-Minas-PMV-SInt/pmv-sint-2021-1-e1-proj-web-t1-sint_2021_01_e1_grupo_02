let linkVeiculo = document.getElementById('linkVeiculo');

const regex = /CadastroVeiculo/;

if(regex.test(location.pathname) === true){
    const setarEstilo = {
        background: 'rgba(64, 123, 255, 0.3)',
        color: '#407BFF'
    }

    for (let estilo in setarEstilo){
        linkVeiculo.style[estilo] = setarEstilo[estilo];
    }
}

function limpar(){
    if(confirm("Tem certeza que deseja cancelar?")){
        empty();
    }
}
function empty(){
    document.getElementById("nome").value=""; 
    document.getElementById("consumo-medio").value=""; 
    document.getElementById("preco").value=""; 
    document.getElementById("descricao").value=""; 
}

function registrarVeiculo(){
    var novo = new Object(); 
    novo.nome=document.getElementById("nome").value; 
    novo.id ="vei-"+novo.nome.replace(/\s/g, '');
    novo.categoria=document.getElementById("categoria").value;
    novo.consumoMedio=document.getElementById("consumo-medio").value; 
    novo.preco=document.getElementById("preco").value; 
    novo.descricao=document.getElementById("descricao").value; 
    
    if(novo.nome == "" ){
        alert("O campo nome deve ser preenchido!"); 
        return false;
    }
    if(novo.consumoMedio == "" ){
        alert("O campo consumo médio deve ser preenchido!"); 
        return false;
    }
    if(novo.nome == "" ){
        alert("O campo preço deve ser preenchido!"); 
        return false;
    }

    let veiculo = JSON.parse(localStorage.getItem(novo.id));
    if(veiculo != null && veiculo.tipo == "veiculo"){
        alert("Este veículo já está cadastrado!"); 
        return false; 
    }
    veiculo = JSON.stringify(novo); 
    localStorage.setItem(novo.id, veiculo); 

    alert("Veículo cadastrado com sucesso!"); 
    empty();
}