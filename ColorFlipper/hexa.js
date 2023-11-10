// color arrays 


const colors = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];

// Trgeting elemnt 

const colorBtn = document.querySelector(".btn");

const colorCode = document.querySelector(".colorCode");

// event listener on btn 

colorBtn.addEventListener("click", function () {
    let hexColor = "#"

    for(let i = 0 ; i <6 ;i++){
        hexColor += getRandomColor();
    }

 
     document.body.style.backgroundColor = hexColor;
     colorCode.textContent = hexColor;
 
 
 });



// geting the array value through index number 

function getRandomColor() {
    return Math.floor(Math.random() * 6)
  }