

function passTheMessage(){
    const input = document.getElementById('msginput');
     const value = input.value;
     document.getElementById('message').textContent = value;
}
document.getElementById('button').addEventListener("click", passTheMessage)