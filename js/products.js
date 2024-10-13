"use strict";


// Dit globale order objekt, som holder styr på hver type mad
let order = {
    sushi: { quantity: 0, totalPrice: 0, unitPrice: 50 },   // prisen på Sushi
    ramen: { quantity: 0, totalPrice: 0, unitPrice: 65 },   // prisen på Ramen
    gyoza: { quantity: 0, totalPrice: 0, unitPrice: 30 },   // prisen på Gyoza
    surprise: { quantity: 0, totalPrice: 0, unitPrice: 45 } // prisen på Surprise
};

// Funktion til at tilføje et produkt til kurven og opdatere input-feltet
function addToCart(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 1;
    updateTotalPrice(product); // Opdater produktets totalpris
    saveOrderToLocalStorage(); // Gem ændringer i localStorage
}

// Funktion til at fjerne et produkt fra kurven og opdatere input-feltet
function removeFromCart(product) {
    let quantity = document.getElementById(product).value;
    if (quantity > 0) {
        document.getElementById(product).value = parseInt(quantity) - 1;
        updateTotalPrice(product); // Opdater produktets totalpris
        saveOrderToLocalStorage(); // Gem ændringer i localStorage
    }
}

// Funktion til at nulstille kurven for et produkt
function resetCart(product) {
    document.getElementById(product).value = 0;
    updateTotalPrice(product); // Opdater produktets totalpris
    saveOrderToLocalStorage(); // Gem ændringer i localStorage
}

// Funktion til at opdatere den totale pris for et produkt
function updateTotalPrice(product) {
    const quantityElement = document.getElementById(product);
    const totalElement = document.getElementById(product + '-total');

    if (quantityElement && totalElement) {
        const quantity = parseInt(quantityElement.value);
        const price = order[product].unitPrice;  // Brug prisen fra order objektet
        const total = quantity * price;

        totalElement.value = total + ' kr.';

        // Opdater bestillingsobjektet
        order[product].quantity = quantity;
        order[product].totalPrice = total;

        checkoutTotalPrice(); // Opdater total summen for alle produkter
    }
}

// Funktion til at opdatere den samlede pris for alle produkter i kurven
function checkoutTotalPrice() {
    let totalSum = 0;

    // Gennemgå hvert produkt i ordren
    for (let product in order) {
        // Få total-prisen for produktet fra HTML-elementet
        const totalPriceElement = document.getElementById(product + '-total').value;

        // Fjern " kr." fra total-prisen og konverter til tal
        const totalPrice = parseFloat(totalPriceElement.replace(' kr.', '')) || 0;

        // Læg prisen til den samlede sum
        totalSum += totalPrice;
    }

    // Opdater total sum feltet med den nye total sum
    document.getElementById('totalSum').value = totalSum + ' kr.';

        // Save total sum to localStorage
        localStorage.setItem('totalPrice', totalSum);
}

// Funktion til at opdatere den totale pris for et produkt
function updateTotalPrice(product) {
    const quantityElement = document.getElementById(product);
    const totalElement = document.getElementById(product + '-total');

    if (quantityElement && totalElement) {
        const quantity = parseInt(quantityElement.value);
        const price = order[product].unitPrice;  // Brug prisen fra order objektet
        const total = quantity * price;

        // Opdater total price feltet for produktet
        totalElement.value = total + ' kr.';

        // Opdater bestillingsobjektet
        order[product].quantity = quantity;
        order[product].totalPrice = total;

        // Opdater den samlede total sum
        checkoutTotalPrice();
    }
}


// Når siden indlæses, henter vi data fra localStorage
window.onload = function() {
    const totalPrice = localStorage.getItem('totalPrice') || '0';
    document.getElementById('totalPrice').textContent = totalPrice + ' kr.';
};

// Tilføjes i bunden af den eksisterende script.js fil
function goToCheckout() {
    window.location.href = 'checkout.html';
}


