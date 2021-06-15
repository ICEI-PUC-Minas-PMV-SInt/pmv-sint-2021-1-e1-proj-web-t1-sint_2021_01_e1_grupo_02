let linkUsuario = document.getElementById('linkUsuario');
var localStorage = Window.localStorage; 
const regexNumero = /[0-9]/;


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
function limpar(){
    if(confirm("Tem certeza que deseja cancelar?")){
        document.getElementById("nome").value=""; 
        document.getElementById("sobrenome").value=""; 
        document.getElementById("email").value=""; 
        document.getElementById("senha").value=""; 
        document.getElementById("repetirSenha").value=""; 
    }
}

function registrarUsuario(){
    var novo = new Object(); 
    novo.nome=document.getElementById("nome").value; 
    novo.sobrenome=document.getElementById("sobrenome").value;
    novo.email=document.getElementById("email").value; 
    novo.senha=document.getElementById("senha").value; 
    let repetirSenha = document.getElementById("repetirSenha").value; 

    if(novo.senha != repetirSenha){
        alert("Senhas não são iguais. Por favor verifique a senha."); 
        return false;
    }

    if(novo.senha.length < 7 ){
        alert("A senha deve ter pelo menos 8 caracteres."); 
        return false;
    }

    if(regex.test(novo.senha) ){
        alert("A senha deve ter pelo menos um número."); 
        return false;
    }

    

    let usuario = JSON.parse(localStorage.getItem(novo.email));
    if(usuario != null && usuario.tipo == "usuario"){
        alert("Este e-mail já está sendo utilizado por outro usuário. Não é possível utiliza-lo!"); 
        return false; 
    }
    usuario = JSON.stringify(novo); 
    localStorage.setItem(novo.email, usuario); 

    alert("Usuário cadastrado com sucesso!"); 
}