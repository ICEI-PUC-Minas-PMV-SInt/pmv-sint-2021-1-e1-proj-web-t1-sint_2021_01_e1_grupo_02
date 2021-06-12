//Criando um Modal
let myModal = new bootstrap.Modal(document.getElementById('myModal'));

//Criando referência com o botão "INICIE AGORA"
let btn = document.querySelector('.index-button');

//Atribuindo evento click ao botão
btn.addEventListener('click', toggleModal);

function toggleModal() {
    myModal.toggle();
}