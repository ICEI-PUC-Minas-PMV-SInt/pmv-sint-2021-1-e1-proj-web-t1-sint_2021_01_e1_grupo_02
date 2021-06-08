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