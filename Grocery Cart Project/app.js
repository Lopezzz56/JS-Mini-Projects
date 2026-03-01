let products = [
    {
        id:1, 
        name: "BackPack",
        price: 13,
    },
        {
        id:2, 
        name: "Purse",
        price: 15,
    },
        {
        id:3, 
        name: "Laptop",
        price: 100,
    },
        {
        id:4, 
        name: "Mouse",
        price: 50,
    },
        {
        id:5, 
        name: "Phone",
        price: 90,
    },
];

function renderCart() {
    cartList.innerHTML = ""; 
    cartIds.forEach(id => {
        // Find the full product object using the ID
        const product = products.find(p => p.id === id);
        
        if (product) {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h6 class="card-title mb-1">${product.name}</h6>
                        <p class="card-text text-muted mb-2">$${product.price}</p>
                        <button class="btn btn-danger btn-sm bi-trash-fill" data-id="${product.id}"> Remove</button>
                    </div>
                </div>
            `;
            cartList.append(li);
        }
    });
    
    updateBadge(); // Update the red number
}
const productlist = document.querySelector(".products-list");
const cartList = document.querySelector(".carts-list");

let cartIds = []; // Global state to track what is in the cart

function displayProducts() {
    productlist.innerHTML = ""; // Clear current list to re-draw
    
    products.forEach(product => {
        const li = document.createElement("li");
        const isInCart = cartIds.includes(product.id);

        li.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-success fw-bold">$${product.price}</p>
                    ${isInCart 
                        ? `<button class="btn btn-danger btn-sm bi-trash-fill" data-id="${product.id}"> Remove</button>` 
                        : `<button class="btn btn-primary btn-sm bi-cart-plus-fill" data-id="${product.id}"> Add to Cart</button>`
                    }
                </div>
            </div>
        `;
        productlist.append(li);
    });
}

// Initial display
displayProducts();

// 3. Updated Product List Listener
productlist.addEventListener("click", (e) => {
    const id = parseInt(e.target.dataset.id);
    
    if (e.target.classList.contains("bi-cart-plus-fill")) {
        cartIds.push(id);
        renderCart(); // Helper to draw the cart list
    } else if (e.target.classList.contains("bi-trash-fill")) {
        cartIds = cartIds.filter(item => item !== id);
        renderCart();
    }
    
    displayProducts(); // RE-DRAW the shop to toggle the buttons!
});


function updateBadge() {
    const badge = document.querySelector(".badge");
    const itemCount = cartList.children.length;
    badge.textContent = itemCount;
}

cartList.addEventListener("click", (e) => {
    if (e.target.classList.contains("bi-trash-fill")) {
        const id = parseInt(e.target.dataset.id);
        
        // Remove the ID from our state array
        cartIds = cartIds.filter(itemId => itemId !== id);
        
        // Re-render BOTH views to keep them in sync
        renderCart();
        displayProducts();
    }
});

const cartsel = document.querySelector(".cart");
const productsel = document.querySelector(".products");
const productl = document.querySelector(".productlist");
const cartl = document.querySelector(".cartList");
cartsel.addEventListener("click", () =>{
    productl.classList.add("hidden");
    cartl.classList.remove("hidden");
})

productsel.addEventListener("click", () =>{
    cartl.classList.add("hidden");
    productl.classList.remove("hidden");
})