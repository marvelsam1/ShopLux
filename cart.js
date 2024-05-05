const product = [
    {
        id: 0,
        image: "assets/Frame 604 (1).png",
        title: "Customized",
        price: 60,
    },
    {
        id: 1,
        image: "assets/Frame 604.png",
        title: "Customize",
        price: 120,
    },
    {
        id: 2,
        image: "assets/Frame 611.png",
        title: "Customiz",
        price: 160,
    },
    {
        id: 3,
        image: "assets/Frame 608 (1).png",
        title: "Customi",
        price: 40,
    },
]

const root = document.getElementById("featured");
const btn = document.querySelector(".btn");


window.addEventListener("DOMContentLoaded", function () {
  
    root.innerHTML =  product.map(function (item) {
        return `<div class="pro">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <p>${item.price} <span>Available</span></p>
                <h3>${item.title}</h3>
                <img src="assets/Five star.png" alt="">
                <div class="btn" onclick="displayCart(${item.id})">Add to cart</div>
            </div>
        </div>`
    }).join('');
})

// cart array
let cart = [];

function displayCart(id) {
    // check if product exists before
    if(cart.some(function(checkExistence) {return checkExistence.id === id})) {
        alert("Product already exist!");
    } else {
        const item =  product.find(function(product) {
            return product.id === id;
        })
        cart.push(item);
        console.log(cart);

        renderCartItems()
    }
}


// display cart items
const showCarted = document.querySelector(".showcarted");
function renderCartItems() {
    showCarted.innerHTML = cart.map(function (items) {
        return `
        <div class="cart-item">
            <img src="${items.image}" alt="">
            <p>${items.title}</p>
            <h5>${items.price}</h5>
        </div>`
    }).join("");
}

