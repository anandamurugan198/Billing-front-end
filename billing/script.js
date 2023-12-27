let products = [{ Id: 1, name: "Classic Shawarma", price: 100, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg"}, 
{ Id: 2, name: "Peri peri shawarma", price: 120, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg"}, 
{ Id: 3, name: "Tandori shawarma", price: 120, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" },
{ Id: 4, name: "Mexican shawarma", price: 120, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" }, 
{ Id: 5, name: "Cheesy shawarma", price: 120, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" }, 
{ Id: 6, name: "Hot & spicy shawarma", price: 120, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" },
{ Id: 7, name: "Paani puri shawarma", price: 120, Type: "Shawarma", imageUrl: "../static/paani.jpg" },
{ Id: 8, name: "Classic Shawarma plate", price: 140, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 9, name: "Peri peri shawarma plate", price: 170, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 10, name: "Tandori shawarma plate", price: 170, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" },
{ Id: 11, name: "Mexican shawarma plate", price: 170, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 12, name: "Cheesy shawarma plate", price: 170, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 13, name: "Hot & spicy shawarma plate", price: 170, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" },
{ Id: 14, name: "Classic Shawarma special", price: 140, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" }, 
{ Id: 15, name: "Peri peri shawarma special", price: 160, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg"}, 
{ Id: 16, name: "Tandori shawarma special", price: 160, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" },
{ Id: 17, name: "Mexican shawarma special", price: 160, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" }, 
{ Id: 18, name: "Cheesy shawarma special", price: 170, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" }, 
{ Id: 19, name: "Hot & spicy shawarma special", price: 160, Type: "Shawarma", imageUrl: "../static/roll shawarma.jpg" },
{ Id: 20, name: "Classic Shawarma plate special", price: 190, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 21, name: "Peri peri shawarma plate special", price: 220, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 22, name: "Tandori shawarma plate special", price: 220, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" },
{ Id: 23, name: "Mexican shawarma plate special", price: 220, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 24, name: "Cheesy shawarma plate special", price: 220, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" }, 
{ Id: 25, name: "Hot & spicy shawarma plate special", price: 220, Type: "Shawarma", imageUrl: "../static/plate shawarma.jpg" },
{ Id: 26, name: "Hot wings", price: 150, Type: "Fried", imageUrl: "../static/wings.jpg" }, 
{ Id: 27, name: "Bonless strips", price: 130, Type: "Fried", imageUrl: "../static/boneless strips.jpg" },
{ Id: 28, name: "Drumstick piece", price: 150, Type: "Fried", imageUrl: "../static/drumstick.jpg" },
{ Id :29, name: "Loaded chicken fry", price: 160, Type:"Fried", imageUrl: "../logo.png"}, 
{ Id :30, name: "Veg Burger", price: 80, Type:"Burger", imageUrl: "../static/veg burger.jpg"},
{ Id :31, name: "Classic chicken Burger", price: 130, Type:"Burger", imageUrl: "../static/chicken burger.jpg"},
{ Id :32, name: "Zinger Burger", price: 150, Type:"Burger", imageUrl: "../static/chicken burger.jpg"},
{ Id :33, name: "Tower Burger", price: 200, Type:"Burger", imageUrl: "../static/tower burger.jpg"},
{ Id :34, name: "Veg sandwich", price: 80, Type:"Sandwich", imageUrl: "../static/veg sandwich.jpg"},
{ Id :35, name: "chicken sandwich", price: 130, Type:"Sandwich", imageUrl: "../static/veg sandwich.jpg"},
{ Id :36, name: "Fried chicken sandwich", price: 150, Type:"Sandwich", imageUrl: "../static/veg sandwich.jpg"},
{ Id :37, name: "Double decker sandwich", price: 200, Type:"Sandwich", imageUrl: "../static/veg sandwich.jpg"},
{ Id :38, name: "Blue moroco", price: 100, Type:"Mojito", imageUrl: "../static/blue moroco.jpg"},
{ Id :39, name: "Blue berry", price: 100, Type:"Mojito", imageUrl: "../static/blue berry.jpg"},
{ Id :40, name: "Mint mojito", price: 100, Type:"Mojito", imageUrl: "../static/mint.jpg"},
{ Id :41, name: "strawberry", price: 100, Type:"Mojito", imageUrl: "../static/strawberry.jpg"},
{ Id :42, name: "Water bottle - 1l", price: 20, Type:"Drink", imageUrl: "../static/water.jpg"},
{ Id :43, name: "Coke - 500 ml", price: 40, Type:"Drink", imageUrl: "../static/coke.jpg"},
{ Id :44, name: "Pepsi - 500 ml", price: 40, Type:"Drink", imageUrl: "../static/pepsi.jpg"},
{ Id :45, name: "7up - 500 ml", price: 40, Type:"Drink", imageUrl: "../static/7up.jpg"},
{ Id :46, name: "Water bottle - 500 ml", price: 10, Type:"Drink", imageUrl: "../static/water.jpg"},
{ Id :47, name: "Coke - 200 ml", price: 20, Type:"Drink", imageUrl: "../static/coke.jpg"},
{ Id :48, name: "Pepsi - 200 ml", price: 20, Type:"Drink", imageUrl: "../static/pepsi.jpg"},
{ Id :49, name: "7up - 200 ml", price: 20, Type:"Drink", imageUrl: "../static/7up.jpg"},
{ Id :50, name: "Goli soda", price: 35, Type:"Drink"}];

let cart = [];
let totalAmount = 0;

function renderProducts(products) {
    let productListElement = document.getElementById('container');
    productListElement.innerHTML = "";

    products.forEach(product => {
        let productElement = document.createElement('div');
        productElement.setAttribute("class", "grocery-tab");
        productElement.setAttribute("id", "grocery-tab-" + product.Id.toString());
        productElement.onclick = () => addToCart(product.name, product.price);

        let imageElement = document.createElement('img');
        imageElement.setAttribute("class", "grocery-img");
        imageElement.src = product.imageUrl;

        let nameElement = document.createElement('span');
        nameElement.setAttribute("class", "grocery-name");
        nameElement.innerHTML = product.name;

        let priceElement = document.createElement('span');
        priceElement.setAttribute("class", "price");
        priceElement.innerHTML = `₹${product.price.toFixed(2)}`; // Use the Rupee symbol

        let options = document.createElement("span");
        options.setAttribute("class", "options");

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        productElement.appendChild(options);

        productListElement.appendChild(productElement);
    });
}

function addToCart(productName, price) {
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(productName) {
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity -= 1;

        if (existingItem.quantity === 0) {
            cart = cart.filter(item => item.name !== productName);
        }
    }

    updateCart();
}

function updateCart() {
    let cartElement = document.getElementById("cart");
    let totalAmountElement = document.getElementById("totalAmount");
    let saveOptionsElement = document.getElementById("saveOptions");

    cartElement.innerHTML = "";

    cart.forEach(item => {
        let rowItem = document.createElement("tr");

        let nameElement = document.createElement("td");
        nameElement.textContent = `${item.name}`;

        let qtyElementParent = document.createElement("td");

        let qtyElement = document.createElement("span");
        qtyElement.textContent = `${item.quantity}`;

        let priceElement = document.createElement("td");
        priceElement.textContent = `₹${(item.quantity * item.price).toFixed(2)}`;

        let addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.onclick = () => addToCart(item.name, item.price);

        let removeButton = document.createElement("button");
        removeButton.textContent = "-";
        removeButton.onclick = () => removeFromCart(item.name);

        let buttonDiv = document.createElement("div");
        buttonDiv.appendChild(removeButton);
        buttonDiv.appendChild(qtyElement);
        buttonDiv.appendChild(addButton);
        buttonDiv.classList.add('qty-block');
        qtyElementParent.appendChild(buttonDiv);

        rowItem.appendChild(nameElement);
        rowItem.appendChild(qtyElementParent);
        rowItem.appendChild(priceElement);

        cartElement.appendChild(rowItem);
    });

    totalAmount = cart.reduce((total, item) => total + item.quantity * item.price, 0);
    totalAmountElement.textContent = `${totalAmount.toFixed(2)}`;

     // Show the Save options button
     saveOptionsElement.style.display = "block";
}

function filterGroceries(type) {
    var grocery = type === "all" ? products : products.filter(a => a.Type === type);
    let options = document.getElementsByClassName("filterOption");
    for (var option of options) {
          if (type === option.id) {
                option.classList.add("filterOptionActive");
          } else {
                option.classList.remove("filterOptionActive");
          }
    }
    renderProducts(grocery);
}

function handleSaveOptions(option) {
    switch (option) {
        case 'save':
            break;
        case 'saveExit':
            location.reload();
            break;
        case 'savePrint':
            alert("Printer not available");
            location.reload();
            break;
        default:
            break;
    }

    // Reset the display of save options
    document.getElementById("saveOptions").style.display = "none";
}

window.onload = renderProducts(products);
