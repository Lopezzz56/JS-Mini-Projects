

const colors = [
    "assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg", "assets/img4.jpg", "assets/img5.jpg", "assets/img6.jpg",
]


let counter = 0;
let autoplayint;
let color = `url('${colors[counter]}')`;
function previmage(){
    
    counter = (counter - 1 + colors.length) % colors.length;
    color = `url('${colors[counter]}')`
    document.querySelector('.bodydiv').style.backgroundImage = color;
}

function nextimage(){
    
    counter = (counter + 1) % colors.length;
    color = `url('${colors[counter]}')`
    document.querySelector('.bodydiv').style.backgroundImage = color;
}

function autoplay(){
    stopAutoPlay()
    autoplayint = setInterval(nextimage, 3000);
}

function stopAutoPlay() {
    clearInterval(autoplayint);
}

document.getElementById('previous').addEventListener("click", () => {
    stopAutoPlay(); 
    previmage();
});

document.getElementById('next').addEventListener("click", () => {
    stopAutoPlay(); 
    nextimage();
});

document.getElementById('autoplay').addEventListener("click", autoplay )

autoplay()