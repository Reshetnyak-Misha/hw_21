const quantity = prompt("Quantity:");
let price = prompt("Price:");

if (!isNaN(quantity) && !isNaN(price)) {
    switch (prompt("enter your sale")) {
        case "NEWYEAR":
            price = (price - ((price * 20) / 100)) * quantity;
            break;
        case "BLACKFRIDAY":
            price = (price - ((price * 30) / 100)) * quantity;
            break;
        case "SUMMERSALE":
            price = (price - ((price * 15) / 100)) * quantity;
            break;

        default:
            price = (price - ((price * 5) / 100)) * quantity;
            break;
    }
} else {
    alert("Enter numbers pls!");
}

if ((quantity >= 3) && (price >= 1000)) {
    price = (price - ((price * 15) / 100));
} else if (quantity >= 3) {
    price = (price - ((price * 5) / 100));
} else if(price >= 1000) {
    price = (price - ((price * 10) / 100));
}

alert(`Your final cost including all discounts: ${price} `);