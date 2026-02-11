console.log("Script loaded!")
const buttons = document.querySelectorAll('.filter-btn');

 let value = 'all';


buttons.forEach(function(button) {
    button.addEventListener('click', function(event){
        event.preventDefault();

        value = event.currentTarget.dataset.filter;

        filterItems()
    })
})

function filterItems() {
 
const store = document.querySelectorAll('.store-item');
const noResults = document.getElementById('no-results');
 let matchfound = false;
store.forEach(function(item){
    const itemValue = item.querySelector('#store-item-name').textContent.toLowerCase();

    const itemCategory = item.dataset.item;
    if (value === 'all' || itemCategory === value || itemValue.includes(value)) {
             item.style.display = 'block';
             matchfound = true;
        } else {
             item.style.display = 'none';
        }
})

if(matchfound){
    noResults.classList.add('d-none');
}else{
    noResults.classList.remove('d-none');
}
 

}

function searchitems(event) {
    value = event.target.value.toLowerCase().trim();
    filterItems()
}

document.getElementById('search-item').addEventListener('keyup', searchitems)
