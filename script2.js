let stuffs = {
    Furniture: {
        Name: "Square Coffee Table",
        Price: 50,
        Image: "squareTable.jpg"
    },
    Appliances: "",
    Games: "",
    Books: "",
    Instruments: "",
    VHS: ""
};

for (let i = 0; i<stuffs.length; i++) {
    let categories = document.querySelector("#categories").innerHTML;
    document.querySelector("#categories").innerHTML = `${categories}<li>${stuffs[i]}</li>`
};