
console.log("Script Loaded")
const addCard = document.querySelector(".addcard")
const modal = document.querySelector(".modal")
const overLay = document.querySelector(".overlay")
const close = document.querySelector(".close")
addCard.addEventListener("click", ()=>{
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
})

close.addEventListener("click", ()=>{
    modal.classList.add("hidden");
    overLay.classList.add("hidden");
})
overLay.addEventListener("click", () => {
    modal.classList.add("hidden");
    overLay.classList.add("hidden");
});

const form = document.querySelector(".form")
const cards = []
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const formData = new FormData(form)
    

    
    const flashData = Object.fromEntries(formData.entries())
    console.log(flashData)
    cards.push(flashData)

    form.reset()
    modal.classList.add("hidden");
    overLay.classList.add("hidden");

    displayCards()
})
const cardsList = document.querySelector(".cardsList")
function displayCards(){
    cardsList.innerHTML = '';


cards.forEach((card, index) => {
    const li = document.createElement("li");
    li.className = "col-md-4 mb-4 list-unstyled"; 
    
    li.innerHTML = `
        <div class="card h-100 shadow-sm border-info w-100 cursor-pointer" style="cursor: pointer;">
            <div class="card-body text-center">
                <h5 class="text-primary mb-3">Q: ${card.question}</h5>
                
                <div class="answer-section d-none">
                    <hr>
                    <p class="text-success fw-bold">A: ${card.answer}</p>
                </div>

                <button class="btn btn-sm btn-outline-info mt-2 toggle-btn">Show Answer</button>
            </div>
        </div>
    `;

    // SELECT elements inside THIS specific card
    const cardDiv = li.querySelector(".card");
    const answerSection = li.querySelector(".answer-section");
    const btn = li.querySelector(".toggle-btn");

    // TOGGLE LOGIC: Click either the button or the whole card
    const toggleAnswer = () => {
        const isHidden = answerSection.classList.toggle("d-none");
        btn.textContent = isHidden ? "Show Answer" : "Hide Answer";
    };

    cardDiv.addEventListener("click", toggleAnswer);
    
    cardsList.appendChild(li);
});
}