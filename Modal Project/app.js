
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const overlay = document.querySelector('.overlay')


function openModal(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
