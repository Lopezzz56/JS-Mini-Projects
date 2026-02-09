document.getElementById('increase').addEventListener("click", increaseNo);
document.getElementById('decrease').addEventListener("click", decreaseNo);
document.getElementById('reset').addEventListener("click", reset);

let counter =0;
function increaseNo(){
    counter =  counter +1;
    document.getElementById('counter').textContent = counter;
}

function decreaseNo(){
    counter =  counter -1;
    document.getElementById('counter').textContent = counter;
}

function reset(){
    counter =  0;
    document.getElementById('counter').textContent = counter;
}
