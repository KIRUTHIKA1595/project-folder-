const products = [
    { id: 1, name: "Laptop", price: 50000, image: "images/laptop.jpg.jpg" },
    { id: 2, name: "Smartphone", price: 20000, image: "images/phone.jpg.jpg" },
    { id: 3, name: "Headphones", price: 3000, image: "images/headphones.jpg" },
    { id: 4, name: "Smartwatch", price: 10000, image: "images/watch.jpg.jpg" },
    { id: 5, name: "Camera", price: 25000, image: "camera.jpg.jpg" },
    { id: 6, name: "Gaming Console", price: 40000, image: "console.jpg.jpg" }
];

function displayProducts() {
    const container = document.getElementById("product-container");
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        container.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to cart!`);
}

window.onload = displayProducts;
