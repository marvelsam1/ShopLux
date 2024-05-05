// nav-bar toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".mobile");
// const cancelIcon = document.getElementById("cancel-icon");
const logo = document.getElementById("logo")
// cart
const cartIcon = document.getElementById("cart-icon");
const cartItemsOverall = document.querySelector(".cart-items");

// remove cart
const removeCartIcon = document.querySelector(".remove-cart-icon");
removeCartIcon.addEventListener("click", function () {
    cartItemsOverall.classList.remove("hideCart");
    // console.log("cancel-cart");
})



// add side bar
menuIcon.addEventListener("click", function () {
    navLinks.classList.add("show-nav");
    // console.log("add");
})

// remove side bar
const cancelIcon = navLinks.querySelector(".cIcon")
cancelIcon.addEventListener("click", function () {
    navLinks.classList.remove("show-nav");
    // console.log("remove");
})

// show and remove cart
cartIcon.addEventListener("click", function () {
    cartItemsOverall.classList.add("hideCart")
})

// products
const products = [
    {
        id: 1,
        image: "assets/Frame 604 (1).png",
        title: "laptop",
        price: 150,
        // numberOfUnits: 1,
        instock: 5,
    },
    {
        id: 2,
        image: "assets/Frame 604.png",
        title: "biscuit",
        price: 15,
        // numberOfUnits: 1,
        instock: 5,
    },
    {
        id: 3,
        image: "assets/Frame 608 (1).png",
        title: "gamepad",
        price: 30,
        // numberOfUnits: 1,
        instock: 5,
    },
    {
        id: 4,
        image: "assets/Frame 608 (2).png",
        title: "jacket",
        price: 70,
        // numberOfUnits: 1,
        instock: 5,
    },
    {
        id: 5,
        image: "assets/Frame 608.png",
        title: "shoe",
        price: 30,
        // numberOfUnits: 1,
        instock: 5,
    },
    {
        id: 6,
        image: "assets/Frame 611.png",
        title: "gamepad",
        price: 25,
        // numberOfUnits: 1,
        instock: 5,
    },
    {
        id: 7,
        image: "assets/Frame 608.png",
        title: "shoe",
        price: 30,
        // numberOfUnits: 1,
        instock: 5,
    },
    {
        id: 8,
        image: "assets/eos-250d-03-500x500 1.png",
        title: "camera",
        price: 50,
        // numberOfUnits: 1,
        instock: 5,
    },
]

const productsItems = document.getElementById("products-con");
// product-buttons
const shoeBtn = document.getElementById("shoe");
const cameraBtn = document.getElementById("cameraa");
const laptopBtn = document.getElementById("laptop");
const jacketBtn = document.getElementById("jacket");
const gamepadBtn = document.getElementById("gamepad");
const biscuitBtn = document.getElementById("biscuit");
const allBtn = document.getElementById("all");
// submit button
const submitBtn = document.getElementById("submit");
// input
const input = document.getElementById("input-1");
// error message
const errorMessage  = document.getElementById("error-message");

// display items when page loads
window.addEventListener("DOMContentLoaded", function () {
    productsItems.innerHTML = products.map(function(item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})

// filter products
// all button
allBtn.addEventListener("click", function () {
    productsItems.innerHTML = products.map(function (item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})

// shoe button
shoeBtn.addEventListener("click", function () {
    let shoeFilter = products.filter(function(i) {
        return i.title === "shoe";
    })

    productsItems.innerHTML = shoeFilter.map(function (item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})

// camera btn
cameraBtn.addEventListener("click", function () {
    let cameraFilter = products.filter(function(i) {
        return i.title === "camera";
    })

    productsItems.innerHTML = cameraFilter.map(function (item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})

// laptop button
laptopBtn.addEventListener("click", function () {
    let laptopFilter = products.filter(function(i) {
        return i.title === "laptop";
    })

    productsItems.innerHTML = laptopFilter.map(function (item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})

// jacket button
jacketBtn.addEventListener("click", function () {
    let jacketFilter = products.filter(function(i) {
        return i.title === "jacket";
    })

    productsItems.innerHTML = jacketFilter.map(function (item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})

// gamepad button
gamepadBtn.addEventListener("click", function () {
    let gameFilter = products.filter(function(i) {
        return i.title === "gamepad";
    })

    productsItems.innerHTML = gameFilter.map(function (item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})

// biscuit button
biscuitBtn.addEventListener("click", function () {
    let biscuitFilter = products.filter(function(i) {
        return i.title === "biscuit";
    })

    productsItems.innerHTML = biscuitFilter.map(function (item) {
        return `
        <div class="cardd" data-aos="fade-up"><div class="pro">
        <img src="${item.image}" alt="">
        <div class="text-pro">
            <span>Available</span>
            <h3>${item.title}</h3>
            <img src="assets/Five star.png" alt="">
            <h4>$${item.price}</h4>
        </div>
        <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
    </div></div>`
    }).join("")

    errorMessage.textContent = "";
})










// input section
submitBtn.addEventListener("click", function (e) {
    // prevent the form from default reloading
    e.preventDefault();

    if(document.getElementById("input-1").value.toLowerCase() === "shoe"){
        let shoeFilter = products.filter(function(i) {
            return i.title === "shoe";
        })
    
        productsItems.innerHTML = shoeFilter.map(function (item) {
            return `
            <div class="cardd" data-aos="fade-up"><div class="pro">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <span>Available</span>
                <h3>${item.title}</h3>
                <img src="assets/Five star.png" alt="">
                <h4>$${item.price}</h4>
            </div>
            <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
        </div></div>`
        }).join("")

        errorMessage.textContent = "";
    } else if (document.getElementById("input-1").value.toLowerCase() === "camera"){
        let cameraFilter = products.filter(function(i) {
            return i.title === "camera";
        })
    
        productsItems.innerHTML = cameraFilter.map(function (item) {
            return `
            <div class="cardd" data-aos="fade-up"><div class="pro">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <span>Available</span>
                <h3>${item.title}</h3>
                <img src="assets/Five star.png" alt="">
                <h4>$${item.price}</h4>
            </div>
            <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
        </div></div>`
        }).join("")

        errorMessage.textContent = "";
    } else if(document.getElementById("input-1").value.toLowerCase() === "laptop") {
        let laptopFilter = products.filter(function(i) {
            return i.title === "laptop";
        })
    
        productsItems.innerHTML = laptopFilter.map(function (item) {
            return `
            <div class="cardd" data-aos="fade-up"><div class="pro">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <span>Available</span>
                <h3>${item.title}</h3>
                <img src="assets/Five star.png" alt="">
                <h4>$${item.price}</h4>
            </div>
            <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
        </div></div>`
        }).join("")

        errorMessage.textContent = "";
    } else if (document.getElementById("input-1").value.toLowerCase() === "jacket") {
        let jacketFilter = products.filter(function(i) {
            return i.title === "jacket";
        })
    
        productsItems.innerHTML = jacketFilter.map(function (item) {
            return `
            <div class="cardd" data-aos="fade-up"><div class="pro">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <span>Available</span>
                <h3>${item.title}</h3>
                <img src="assets/Five star.png" alt="">
                <h4>$${item.price}</h4>
            </div>
            <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
        </div></div>`
        }).join("")

        errorMessage.textContent = "";
    } else if (document.getElementById("input-1").value.toLowerCase() === "gamepad") {
        let gameFilter = products.filter(function(i) {
            return i.title === "gamepad";
        })
    
        productsItems.innerHTML = gameFilter.map(function (item) {
            return `
             <div class="cardd" data-aos="fade-up"><div class="pro">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <span>Available</span>
                <h3>${item.title}</h3>
                <img src="assets/Five star.png" alt="">
                <h4>$${item.price}</h4>
            </div>
            <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
        </div></div>`
        }).join("")

        errorMessage.textContent = "";
    } else if (document.getElementById("input-1").value.toLowerCase() === "biscuit"){
        let biscuitFilter = products.filter(function(i) {
            return i.title === "biscuit";
        })
    
        productsItems.innerHTML = biscuitFilter.map(function (item) {
            return `
            <div class="cardd" data-aos="fade-up"><div class="pro">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <span>Available</span>
                <h3>${item.title}</h3>
                <img src="assets/Five star.png" alt="">
                <h4>$${item.price}</h4>
            </div>
            <button id="addCartBtn" onclick="displayCart(${item.id})">Add to Cart</button>
        </div></div>`
        }).join("")

        errorMessage.textContent = "";
    } else {
        productsItems.innerHTML = "";
        errorMessage.textContent = "No product matches!"
    }

    input.value = "";
    
})








// empty-cart-message
const emptyCartMessage = document.querySelector(".empty-cart-items");
// cart array
let cart = [];

function displayCart(id) {
    // check if product exists before
    if(cart.some(function(checkExistence) {return checkExistence.id === id})) {
        alert("Product already exist!");
    } else {
        const item =  products.find(function(product) {
            return product.id === id;
        })

        // Add numberOfUnits property to item
        item.numberOfUnits = 1;
        // console.log(item.numberOfUnits)

        cart.push(item);
        const totalCartPrice1 = cart.reduce(function(accumulator, currentValue) {
            return (accumulator + (currentValue.price * currentValue.numberOfUnits));
        }, 0)
        // console.log(totalCartPrice1);
        const totalPriceInfo = document.getElementById("totalPriceInfo");
        totalPriceInfo.innerHTML = totalCartPrice1;

        renderCartItems();
        emptyCartMessage.textContent = "";
    }
}


// display cart items
const showCarted = document.querySelector(".showCarted");
function renderCartItems() {
    showCarted.innerHTML = cart.map(function (items, index) {
        return `
        <div class="display-cart-item">
            <img src="${items.image}" alt="">
            <div class="cart-text-items">
                <p>${items.title}</p>
                <h5>$${items.price}</h5>
            </div>
            <p class="incr-decr-cart">
                <p class="minus" onclick="decreaseQuantity(${index})">-</p>
                <p class="numberItems">${items.numberOfUnits}</p>
                <p class="plus" onclick="increaseQuantity(${index})">+</p>
            </p>
        </div>`
    }).join("");
}

function decreaseQuantity(index) {
    if (cart[index].numberOfUnits > 1) {
        cart[index].numberOfUnits--;
        renderCartItems();
    }
}

function increaseQuantity(index) {
    if (cart[index].numberOfUnits < 5) {
        cart[index].numberOfUnits++;
        renderCartItems();
    } else {
        alert("Maximum quantity reached (5 units).");
    }
}










// discount-tshirts
const discountTshirts = document.getElementById("discount-tshirts");
const showDiscountCarted = document.querySelector(".showDiscountCarted");

// discount-tshirts-array
const discountProducts = [
    {
        id: 9,
        image: "assets/t-shirt1.jpg",
        title: "t-Shirt",
        oldPrice: 150,
        price: 50,
    },
    {
        id: 10,
        image: "assets/t-shirts2.jpg",
        title: "t-Shirt",
        oldPrice: 100,
        price: 30,
    },
    {
        id: 11,
        image: "assets/t-shirts3.jpg",
        title: "t-Shirt",
        oldPrice: 120,
        price: 40,
    },
    {
        id: 12,
        image: "assets/t-shirts4.jpg",
        title: "t-Shirt",
        oldPrice: 80,
        price: 20,
    },
    {
        id: 13,
        image: "assets/t-shirts5.jpg",
        title: "t-Shirt",
        oldPrice: 280,
        price: 80,
    },
    {
        id: 14,
        image: "assets/t-shirts6.jpg",
        title: "t-Shirt",
        oldPrice: 200,
        price: 70,
    },
    {
        id: 15,
        image: "assets/t-shirts7.jpg",
        title: "t-Shirt",
        oldPrice: 130,
        price: 50,
    },
    {
        id: 16,
        image: "assets/t-shirts8.jpg",
        title: "t-Shirt",
        oldPrice: 180,
        price: 100,
    },
]

window.addEventListener("DOMContentLoaded", function () {
    discountTshirts.innerHTML = discountProducts.map(function(item) {
        return ` <div class="cardd">
        <div class="pro2">
            <img src="${item.image}" alt="">
            <div class="text-pro">
                <span>Available</span>
                <h3>t-Shirt</h3>
                <img src="assets/Five star.png" alt="">
                <p class="old-price">$${item.oldPrice}</p>
                <p class="new-price">$${item.price}</p>
            </div>
            <button id="addCartBtn" onclick="displayDiscountCart(${item.id})">Add to Cart</button>
        </div>
    </div>`
    }).join("")
})







// discount cart empty array
let discountCart = [];

// add items to cart
function displayDiscountCart(id) {
    // check if product exists before
    if(cart.some(function(checkExistence) {return checkExistence.id === id})) {
        alert("Product already exist!");
    } else {
        const item = discountProducts.find(function(product) {
            return product.id === id;
        })

        // Add numberOfUnits property to item
        item.numberOfUnits = 1;
        // console.log(item.numberOfUnits)

        discountCart.push(item);
        const totalPrice2 = discountCart.reduce(function(accumulator, currentValue) {
            return (accumulator + (currentValue.price * currentValue.numberOfUnits))
        }, 0)
        // console.log(totalPrice2);

        const totalDiscountInfo = document.getElementById("totalDiscountInfo");
        totalDiscountInfo.innerHTML = totalPrice2;

        

        renderDiscountCartItems();
        emptyCartMessage.textContent = "";
    }
}

function renderDiscountCartItems() {
    showDiscountCarted.innerHTML = discountCart.map(function (items, index) {
        return `
        <div class="display-cart-item">
            <img src="${items.image}" alt="">
            <div class="cart-text-items">
                <p>${items.title}</p>
                <h5>$${items.price}</h5>
            </div>
            <p class="incr-decr-cart">
                <p class="minus" onclick="decreaseDiscountQuantity(${index})">-</p>
                <p class="numberItems">${items.numberOfUnits}</p>
                <p class="plus" onclick="increaseDiscountQuantity(${index})">+</p>
            </p>
        </div>`
    }).join("");

}

function decreaseDiscountQuantity(index) {
    if (discountCart[index].numberOfUnits > 1) {
        discountCart[index].numberOfUnits--;
        renderDiscountCartItems();
    }
}

function increaseDiscountQuantity(index) {
    if (discountCart[index].numberOfUnits < 5) {
        discountCart[index].numberOfUnits++;
        renderDiscountCartItems();
    } else {
        alert("Maximum quantity reached (5 units).");
    }
}



