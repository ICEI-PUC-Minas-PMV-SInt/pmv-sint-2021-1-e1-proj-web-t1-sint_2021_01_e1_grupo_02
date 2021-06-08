var numero = 0;

function adicionar(){
    
    if(numero == 0)

    {
    var email = document.querySelector('.email').value;
    var senha = document.querySelector('.senha').value;
    var chave = "usuario0";
    var usuario = {
      
        "email": email,
        "senha": senha

    }

    ++numero;
    

    localStorage.setItem(chave, JSON.stringify(usuario));
    localStorage.setItem('numero', JSON.stringify(numero));

} else{

    var numero2 = localStorage.getItem("numero");
    if(numero2 == null)
    numero2 = "0";
    var numero = parseInt(numero2);
    var chave = "usuario" + numero;
    console.log('else');
    var email = document.querySelector('.email').value;
    var senha = document.querySelector('.senha').value;

    var usuario = {

        "email": email,
        "senha": senha
    }

    ++numero;

    localStorage.setItem(chave, JSON.stringify(usuario));
    localStorage.setItem("numero", JSON.stringify(numero));
}
    }

    alert("Recebemos um cadastro"); 

   
    
    


