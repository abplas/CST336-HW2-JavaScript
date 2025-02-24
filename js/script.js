let cart = [];
let total = 0;

function addToCart(item, price, img) {
    cart.push({ item, price });
    updateCart();
    
    document.getElementById("cartimg").gsrc = img;
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