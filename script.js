let stuff = [{
    Name: "Square Coffee Table",
    Price: "50 (or best offer)",
    Image: "Img/squareTable.jpg",
    Category: "Furniture"
},{
    Name: "Lion King (VHS)",
    Price: "Best Offer",
    Image: "",
    Category: "Movies"
},{
    Name: "A",
    Price: "",
    Image: "#",
    Category: "Games"
},{
    Name: "B",
    Price: "",
    Image: "#",
    Category: "Misc"
},{
    Name: "Z",
    Price: "",
    Image: "#",
    Category: "Outdoors"
},{
    Name: "C",
    Price: "",
    Image: "#",
    Category: ""
}];

let categories = document.querySelector("#categories");
let display = document.querySelector(".stuff-display");
let chosen = "All Items";

function searchItems() {
    let chosen = categories.options[categories.selectedIndex].value;
    let sorted = stuff.sort( (a, b) => (a.Name > b.Name));
    
    document.querySelector(".stuff-display").innerHTML = '';
    sorted.forEach( (el) => {
        if (el['Category'] === chosen || chosen === "All Items") {
            document.querySelector(".stuff-display").innerHTML += `<div class='card'> <img src='${el['Image']}' alt='${el['Name']}' class='card-img'> <h2 class='name'>${el['Name']}</h2><h3 class='price'>$ ${el['Price']}</h3><h4 class='category'>${el['Category']}</h4></div>`
        }
    });
};

categories.addEventListener("change", searchItems);
searchItems();