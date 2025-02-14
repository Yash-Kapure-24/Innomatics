// toggle cart btn
function toggleCart() {
    const cartPanel = document.getElementById("cartPanel");
    cartPanel.classList.toggle("open");
}

//add to cart function

function toggleCart() {
    const cartPanel = document.getElementById("cartPanel");
    cartPanel.classList.toggle("open");
}

let menuData = [];
function fetchMenu() {
    fetch("https://api.npoint.io/d48587410594df0f5932")
        .then(res => res.json())
        .then(data => {
            menuData = data;
            displayFoodCards();
        });
}
fetchMenu();

function displayFoodCards() {
    const foodCards = document.getElementById("foodCards");
    let cardsHTML = "";

    menuData.forEach((food) => {
        cardsHTML += `
            <div class="card">
                <img src="${food.food_image}" alt="${food.food_name}">
                <div class="info">
                    <strong>${food.food_name}</strong>
                    <p>${food.food_description}</p>
                    <p><b style="color: black;">$${food.food_price.toFixed(2)}</b></p>
                    <button class="add-btn" onclick="addToOrder(${food.food_id})">Add to Cart</button>
                </div>
            </div>        
        `;
    });

    foodCards.innerHTML = cardsHTML;
}

const addToOrder = (food_id) => {
    const item = menuData.find(food => food.food_id === food_id);
    if (item) {
        order.addItem(item);
    }
};

const order = {
    items: [],
    addItem(item) {
        const existingItem = this.items.find(cartItem => cartItem.food_id === item.food_id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
        this.saveCart();
        updateOrderDisplay();
    },
    calculateTotalPrice() {
        return this.items.reduce((total, item) => total + item.food_price * item.quantity, 0);
    },
    incItem(food_id) {
        const item = this.items.find(i => i.food_id === food_id);
        if (item) {
            item.quantity++;
            this.saveCart();
            updateOrderDisplay();
        }
    },
    decItem(food_id) {
        const item = this.items.find(i => i.food_id === food_id);
        if (item && item.quantity > 1) {
            item.quantity--;
        } else {
            this.removeItem(food_id);
        }
        this.saveCart();
        updateOrderDisplay();
    },
    removeItem(food_id) {
        this.items = this.items.filter(i => i.food_id !== food_id);
        this.saveCart();
        updateOrderDisplay();
    },
    saveCart() {
        localStorage.setItem("cart", JSON.stringify(this.items));
    },
    loadCart() {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            this.items = JSON.parse(savedCart);
        }
    }
};

const updateOrderDisplay = () => {
    const orderDisplay = document.getElementById("orderDisplay");
    document.getElementById("items").innerHTML = order.items.length;

    if (order.items.length === 0) {
        orderDisplay.innerHTML = "<li>Your Cart is Empty</li>";
    } else {
        let orderHtml = "";
        order.items.forEach(item => {
            orderHtml += `
                <li>
                    <div class="order-item-info">
                        ${item.food_name} (x${item.quantity}) <br> $${(item.food_price * item.quantity).toFixed(2)}
                    </div>
                    <div class="order-item-btns">
                        <button onclick="order.incItem(${item.food_id})" style="background-color: green; color: white;">+</button>
                        <button onclick="order.decItem(${item.food_id})" style="background-color: orange; color: white;">-</button>
                        <button onclick="order.removeItem(${item.food_id})" style="background-color: white; color: red;"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </li>
            `;
        });
        orderDisplay.innerHTML = orderHtml;
    }
    document.getElementById("totalPrice").textContent = order.calculateTotalPrice().toFixed(2);
};

order.loadCart();
updateOrderDisplay();