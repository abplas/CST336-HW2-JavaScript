let cart = [];
let total = 0;

function addToCart(item, price, imgs) {
    cart.push({ item, price });
    updateCart();

    document.getElementById("cartimg").src = imgs;
    document.getElementById("cartimg").style.display = "block";
}

function updateCart() {
    let cartList = document.getElementById("cart");

    cartList.innerHTML = "";

    total = 0;
    
    cart.forEach(product => {
        let li = document.createElement("li");

        li.textContent = `${product.item} - $${product.price}`;
        cartList.appendChild(li);

        total += product.price;
    });

    document.getElementById("total").textContent = `Total: $${total}`;
}

document.getElementById("addToCartBtn1").addEventListener("click", function() {
    addToCart('BB J', 1000, 'img/item1.webp');
});

document.getElementById("addToCartBtn2").addEventListener("click", function() {
    addToCart('MM S', 800, 'img/item2.webp');
});

document.getElementById("addToCartBtn3").addEventListener("click", function() {
    addToCart('PRD L', 1200, 'img/item3.avif');
});

document.getElementById("addToCartBtn4").addEventListener("click", function() {
    addToCart('PRD P', 2200, 'img/item4.webp');
});

document.getElementById("addToCartBtn5").addEventListener("click", function() {
    addToCart('DG J', 500, 'img/item5.avif');
});

document.getElementById("addToCartBtn6").addEventListener("click", function() {
    addToCart('RO S', 1200, 'img/item6.webp');
});

