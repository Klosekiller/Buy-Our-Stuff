const categories = document.querySelector("#categories");
const display = document.querySelector(".stuff-display");
var stuff = [];
var options = ["All Items"];
var chosen = "All Items";
const prod = false;

function load() {
    $.ajax({
        type: 'GET',
        url: prod ? 'https://yatessales.herokuapp.com/data' : 'http://localhost:9000/data'
    }).done((data) => {
        stuff = data;
    
        let index = categories.selectedIndex;
        let chosen = categories.options[index].value;
        let sorted = stuff.sort( (a, b) => (a.Name > b.Name));
        
        document.querySelector(".stuff-display").innerHTML = '';
        sorted.forEach( (el) => {
            console.log(el);
            if (!options.includes(el['Category'])) {
                options.push(el['Category']);
                categories.innerHTML += `<option value='${el['Category']}' selected>${el['Category']}</option>`
            }

            if (el['Category'] === chosen || chosen === "All Items") {
                document.querySelector(".stuff-display").innerHTML += `<div class='card'> <img src='${el['ImageSource']}' alt='${el['Name']}' class='card-img'> <h2 class='name'>${el['Name']}</h2><h3 class='price'>$ ${el['Price']}</h3><h4 class='category'>${el['Category']}</h4></div>`
            }
        });

        categories.selectedIndex = index;
    });
}

function searchItems() {
    let chosen = categories.options[categories.selectedIndex].value;
    let sorted = stuff.sort( (a, b) => (a.Name > b.Name));
    
    document.querySelector(".stuff-display").innerHTML = '';
    sorted.forEach( (el) => {
        console.log(el);
        if (el['Category'] === chosen || chosen === "All Items") {
            document.querySelector(".stuff-display").innerHTML += `<div class='card'> <img src='${el['ImageSource']}' alt='${el['Name']}' class='card-img'> <h2 class='name'>${el['Name']}</h2><h3 class='price'>$ ${el['Price']}</h3><h4 class='category'>${el['Category']}</h4></div>`
        }
    });
};

categories.addEventListener("change", searchItems);
load();
setInterval(load, 1000 * 60 * 5);