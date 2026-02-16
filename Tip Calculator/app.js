
console.log("Script Loaded")

let tip = 0;
let split =1;
let amt = 0;
const billamt = document.querySelector(".bill");
const customTip = document.querySelector(".custom");
const splits = document.querySelector(".splits");
const tipamt = document.querySelector(".tipamt");
const amount = document.querySelector(".amount");
const amountpp = document.querySelector(".amountpp");
const resett = document.querySelector(".reset");

billamt.addEventListener("input", (e)=>{
    amt = e.target.value;
    console.log(amt);
})

const buttons = document.querySelectorAll(".inform button");

customTip.addEventListener("input", (e) => {
    resetActiveStates();
    tip = parseFloat(e.target.value);
    updateUI();
});

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        resetActiveStates();
        e.target.classList.add("active");
        customTip.value = "";
        tip = parseFloat(e.target.innerText);
        updateUI();
    });
});

function resetActiveStates(){
    buttons.forEach(btn=>{
        btn.classList.remove("active");
    })
}



function updateUI(){
    const bill = parseFloat(billamt.value) || 0;
    const ppl = parseFloat(splits.value) || 1;
    const tipPercent = parseFloat(tip || 0);

    const totalTip = (tipPercent/100) *bill;
    const totalBill = totalTip + bill;
    const totalBillPp = totalBill/ppl;

    tipamt.textContent = `$${totalTip.toFixed(2)}`;
    amount.textContent = `$${totalBill.toFixed(2)}`;
    amountpp.textContent = `$${totalBillPp.toFixed(2)}`;
}


billamt.addEventListener("input", updateUI);
splits.addEventListener("input", updateUI);

function updateSplit(){
     split = parseFloat(splits.value);
}



function reset() {
   
    tip = 0;
    amt = 0;
    split = 1;

    billamt.value = "";
    customTip.value = "";
    splits.value = "";

    tipamt.textContent = "$0.00";
    amount.textContent = "$0.00";
    amountpp.textContent = "$0.00";

    resetActiveStates();
    
    console.log("Calculator Reset");
}

resett.addEventListener("click", reset)