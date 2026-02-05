const buttons = document.querySelectorAll(".button");


buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
console.log(e.target);
if(e.target.id == "blue"){
    document.body.style.backgroundColor = "blue";
}else if(e.target.id == "red"){
    document.body.style.backgroundColor = "red";
}
else if(e.target.id == "white"){
    document.body.style.backgroundColor = "white";
}
    })
})