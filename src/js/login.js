var localStorage = Window.localStorage; 

function logar(){
    var email = document.querySelector('.email').value;
    var senha = document.querySelector('.senha').value;
    console.log(email);
    if(email == "" || email == undefined){
        alert("O e-mail deve ser preenchido!"); 
        return;
    }
    if(senha == "" || senha == undefined){
        alert("A senha deve ser preenchida!"); 
        return;
    }
    let usuario = JSON.parse(localStorage.getItem(email));

    if(usuario == null){
        alert("Usuário não encontrado."); 
        return;
    }else{
        if(usuario.senha != senha){
            alert("Senha incorreta!"); 
        return;
        }
    }

    window.location.href = 'CadastroVeiculo.html';

} 

