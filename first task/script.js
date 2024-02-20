const budget = prompt("Budget:");
const country = prompt("Country:");

if (budget >= 500) {
    if (country === "Thailand" && budget >= 1500) {
        alert("You can visit Thailand");
    } else if (country === "Thailand" && (budget > 1000 && budget < 1500)) {
        alert("Unfortunately you don't have enough budget for Thailand, but you can visit Italy and Ukraine");
    } else if (country === "Thailand" && budget < 1000) {
        alert("Unfortunately, you don’t have enough budget for Thailand, but you can visit Ukraine");
    }

    if (country === "Italy" && budget >= 1000) {
        alert("You can visit Italy");
    } else if (country === "Italy" && budget < 1000) {
        alert("Unfortunately, you don’t have enough budget for Italy, but you can visit Ukraine");
    }

    if (country === "Ukraine" && budget >= 500) {
        alert("You can visit Ukraine");
    }
} else {
    alert("Unfortunately, we do not have countries that fit your budget.");
}