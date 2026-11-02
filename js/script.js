// Menu items
const menuItems = [
    {
        name: "Cappuccino",
        category: "Coffee",
        price: "R35"
    },
    {
        name: "Americano",
        category: "Coffee",
        price: "R30"
    },
    {
        name: "Latte",
        category: "Coffee",
        price: "R40"
    },
    {
        name: "Hot Chocolate",
        category: "Drinks",
        price: "R35"
    },
    {
        name: "Chocolate Muffin",
        category: "Pastries",
        price: "R25"
    },
    {
        name: "Croissant",
        category: "Pastries",
        price: "R30"
    }
];

// Get menu elements
const menuContainer = document.getElementById("menuItems");
const searchInput = document.getElementById("searchInput");

// Display menu items
function displayMenu(items) {

    menuContainer.innerHTML = "";

    if (items.length === 0) {
        menuContainer.innerHTML = "<p>No items found.</p>";
        return;
    }

    items.forEach(function(item) {

        menuContainer.innerHTML += `
            <div class="menu-item">
                <h2>${item.name}</h2>
                <p>Category: ${item.category}</p>
                <p>Price: ${item.price}</p>
            </div>
        `;

    });
}

// Check if menu elements exist on the page
if (menuContainer && searchInput) {

    displayMenu(menuItems);

    // Search menu items
    searchInput.addEventListener("input", function() {

        const searchText = searchInput.value.toLowerCase();

        const filteredItems = menuItems.filter(function(item) {

            return item.name.toLowerCase().includes(searchText) ||
                   item.category.toLowerCase().includes(searchText);

        });

        displayMenu(filteredItems);

    });

}

// FAQ Accordion Functionality

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

    });

}); 

// Contact Form Functionality

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value;
        const response = document.getElementById("contactResponse");

        response.innerHTML = "Thank you, " + name + "! Your message has been received.";

        contactForm.reset();

    });

} 

// Order Form Functionality

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const coffee = document.getElementById("coffee").value;
        const food = document.getElementById("food").value;
        const quantity = Number(document.getElementById("quantity").value);

        // Coffee prices
        const coffeePrices = {
            americano: 25,
            cappuccino: 30,
            latte: 32
        };

        // Food prices
        const foodPrices = {
            sandwich: 45,
            muffin: 20,
            drink: 18
        };

        // Calculate total
        const total = (coffeePrices[coffee] + foodPrices[food]) * quantity;

        // Display confirmation
        const response = document.getElementById("orderResponse");

        response.innerHTML = "Thank you, " + name +
            "! Your order has been received. Total: R" + total;

        orderForm.reset();

    });

} 
