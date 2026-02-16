
console.log("Script Loaded ")

const container = document.querySelector('.container');
const currdisplay = document.querySelector('.currdisplay')
const totaldiv = document.querySelector('.total')
// const clear = document.querySelector()
let total = 0;

let curr ="";
let prev = "";
let operator =  null;
let history = "";

container.addEventListener("click", (e) =>{
    if(e.target.tagName === "BUTTON"){
        const val = e.target.innerText.trim();
        console.log("You Pressed: ", val)
        if(val === 'C') {
            curr = "";
            prev = "";
            history ="";
            operator = null;
            currdisplay.textContent = "0";
            totaldiv.textContent = "0";
            console.log("Calculator Reset Successfully");
            return;
        }
        
        if(!isNaN(val) || val==='.'){
            curr += val;
            history += val;
            currdisplay.textContent = history;
        }else{
            if(curr === "" && prev === "") return;
            if(prev === ""){
                prev = curr;
            } else if(curr!== "" && operator!==null){
            const num1 = parseFloat(prev);
            console.log("Previous: ", prev);
            const num2 = parseFloat(curr);
            console.log("Previous: ", curr);
            switch(operator){
                case '+':
                    prev = num1 + num2;
                    break;
                case '-':
                    prev = num1 - num2;
                    break;
                case '/':
                    prev = (num2 !== 0) ? num1/num2 : "Error"; 
                    break;
                case 'x':
                    prev = num1 * num2;
                    break;
            }
            totaldiv.textContent = prev;
            }
            
            if(val === '='){
                curr = prev.toString();
                // history = curr;
                currdisplay.textContent = history;
                prev = "";
                operator = null;
            }else{
                operator = val; 
                history += ` ${val} `;
                currdisplay.textContent = history;
                curr = "";  
            }

        }
    }
})