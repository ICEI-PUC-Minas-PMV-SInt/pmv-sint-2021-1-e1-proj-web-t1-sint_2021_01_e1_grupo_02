let linkUsuario = document.getElementById('linkUsuario');

const regex = /CadastroUsuario/;

if(regex.test(location.pathname) === true){
    const setarEstilo = {
        background: 'rgba(64, 123, 255, 0.3)',
        color: '#407BFF'
    }

    for (let estilo in setarEstilo){
        linkUsuario.style[estilo] = setarEstilo[estilo];
    }
}