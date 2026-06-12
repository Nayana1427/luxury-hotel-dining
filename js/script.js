let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

function updateCart() {

    const cartList =
        document.getElementById("cart-list");

    const cartTotal =
        document.getElementById("cart-total");

    if (!cartList || !cartTotal) return;

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            `${item.name} - ₹${item.price}`;

        cartList.appendChild(li);

        total += item.price;
    });

    cartTotal.innerHTML =
        `<strong>Total: ₹${total}</strong>`;
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    cart = [];

    localStorage.removeItem("cart");

    updateCart();
}

window.onload = updateCart;