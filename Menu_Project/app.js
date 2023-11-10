// Targeting the buttons

const allItems = document.getElementById("all");
const breakFast = document.getElementById("breakfast");
const dinner = document.getElementById("dinner");
const lunch = document.getElementById("lunch");
const shakes = document.getElementById("shakes");


// Filter all items 

function filterBtns(category){
    const menuItems = document.querySelectorAll(".menu-item");

    // loop through all menu items  

    menuItems.forEach(item =>{
        const dataValue = item.getAttribute("data-value");

        // check the cuurent item match the selected category 


        if(dataValue === category || category === "all"){
            item.style.display ="flex"; //show item
        } else{
            item.style.display = "none" ; //hide all item
        }
    });
}


// Event listener 

allItems.addEventListener("click" , function(){
    filterBtns("all")
});
breakFast.addEventListener("click" , function(){
    filterBtns("breakfast")
});
dinner.addEventListener("click", function() {
    filterBtns("dinner");
});

lunch.addEventListener("click", function() {
    filterBtns("lunch");
});

shakes.addEventListener("click", function() {
    filterBtns("shakes");
});

