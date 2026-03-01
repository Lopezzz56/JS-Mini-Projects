console.log("Script Loaded")

// const add = document.addEventListener("click", addTasks);
const savechanges = document.getElementById("savechanges");
const title = document.getElementById("title");
const description = document.getElementById("description");

const list = document.getElementById("mylist");

list.addEventListener("click", (e) => {
    // Check if the clicked element has the trash icon class
    if (e.target.classList.contains("bi-trash-fill")) {
        // Find the parent <li> and remove it
        e.target.closest("li").remove();
    }
});


savechanges.addEventListener("click", () => {

    const content = title.value;
    const desc = description.value;
    if(content.trim() === '') return;

    const list = document.getElementById("mylist");
    
    const newli = document.createElement("li");

    newli.innerHTML = `  <div class="task-content"> 
                        <h6 class="mb-0">${content}</h6>
                        <small class="text-muted">${desc}</small>
                    </div>
                    <i class="bi bi-trash-fill"></i>`

    list.append(newli);

    title.value = '';
    description.value = '';


})

// savechanges.addEventListener("click", () => {
//     const content = title.value;
//     const desc = description.value;
//     if(content.trim() === '') return;

//     const list = document.getElementById("mylist");
//     const newli = document.createElement("li");

//     newli.innerHTML = `
//         <div class="task-content"> 
//             <h6 class="mb-0">${content}</h6>
//             <small class="text-muted">${desc}</small>
//         </div>
//         <i class="bi bi-trash-fill text-danger" style="cursor:pointer"></i>`;

//     // TARGETING CLUE: Look for the icon inside the NEW list item
//     const trashIcon = newli.querySelector(".bi-trash-fill");
    
//     trashIcon.addEventListener("click", () => {
//         newli.remove(); // This targets the specific li we just made
//     });

//     list.append(newli);

//     title.value = '';
//     description.value = '';
// });