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

function searchItems() {
    let selectedItem = categories.options[categories.selectedIndex].value;
    return selectedItem;
    //Save the value of the dropdown into a variable.
    //Create a new array that includes objects with the same category as the dropdown value. If "All Items," skip this step.
    //Arrange the new array in alphabetical order
    //Post new array into HTML
    //Post HTML
};

categories.addEventListener("change", searchItems());

searchItems();


//ALEX'S CODE
/*let selection = document.querySelector("#categories");
let chosen = "All Items";

selection.addEventListener('change', () => {
    chosen = selection.options[selection.selectedIndex].value;
    
    let display = document.querySelector(".stuff-display");
    for (let child of display.children) {
        child.hidden = (child.id === chosen);
    };

});*/

//ALEX'S CODE
/*let selection = document.querySelector("#categories");
let chosen = "All Items";

selection.addEventListener('change', () => {
    chosen = selection.options[selection.selectedIndex].value;
    
    let sorted = stuff.sort( (a, b) => (a.Name > b.Name) ? 1 : -1);
    document.querySelector(".stuff-display").innerHTML = '';

    let filtered = sorted.forEach( (el) => {
        document.querySelector(".stuff-display").innerHTML += `<div class='card'> <img src='${el['Image']}' alt='${el['Name']}' class='card-img'> <h2 class='name'>${el['Name']}</h2><h3 class='price'>$ ${el['Price']}</h3><h4 class='category'>${el['Category']}</h4></div>`
    });
});*/

/*if dropdown.value === "All Items", show all items,
else,


/*function searchItems() {
    for (let i = 0; i<stuff.length; i++) {
        let sorted = stuff.filter(function(){
            stuff.Category == chosen;
        })
        let abc = sorted.sort( (a, b) => (a.Name>b.Name) ? 1 : -1);
        let items = document.querySelector(".stuff-display").innerHTML;
        document.querySelector(".stuff-display").innerHTML = `${items} <div class='card'> <img src='${abc[i]["Image"]}' alt='${abc[i]["Name"]}' class='card-img'> <h2 class='name'>${abc[i]["Name"]}</h2><h3 class='price'>$ ${abc[i]["Price"]}</h3><h4 class='category'>${abc[i]["Category"]}</h4></div>`;
    };
};

//ORIGINAL CODE
let selection = document.querySelector("#categories");

selection.addEventListener('change', () => {
    let chosen = selection.options[selection.selectedIndex].value;
    if (chosen == "All Items") {
        let abc = stuff.sort( (a, b) => (a.Name>b.Name) ? 1 : -1);
        let items = document.querySelector(".stuff-display").innerHTML;
        document.querySelector(".stuff-display").innerHTML = `${items} <div class='card'> <img src='${abc[i]["Image"]}' alt='${abc[i]["Name"]}' class='card-img'> <h2 class='name'>${abc[i]["Name"]}</h2><h3 class='price'>$ ${abc[i]["Price"]}</h3><h4 class='category'>${abc[i]["Category"]}</h4></div>`;
    } else {
        searchItems();
    }
});*/