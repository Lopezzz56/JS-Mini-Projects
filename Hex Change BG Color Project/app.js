
function randomcolor(){

    let str = "ABCDEF0123456789";
    let color ="#"
    for(let i=0; i<6; i++){
        color += str[Math.floor(Math.random() * str.length)]
    }
    return color;
}

function changebgcolor(){
    const color = randomcolor();
    document.body.style.backgroundColor = color;
    document.getElementById('hexvalue').textContent = color;

}

function copytoClipboard(){
    const text = document.getElementById('hexvalue').textContent;
    navigator.clipboard.writeText(text);
     alert("Color copied: " + text);
}
// document.querySelector(".button").addEventListener("click", changebgcolor)