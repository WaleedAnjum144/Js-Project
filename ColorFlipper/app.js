// color arrays 


const colors = ["red", "green", "yellow", "#222", "#A48278", "#14186D"];

// Trgeting elemnt 

const colorBtn = document.querySelector(".btn");

const colorCode = document.querySelector(".colorCode");

// event listener on btn 

colorBtn.addEventListener("click", function () {
   const randomColor = getRandomColor()

    document.body.style.backgroundColor = colors[randomColor];
    colorCode.textContent = colors[randomColor];


});


// geting the array value through index number 

function getRandomColor() {
  return Math.floor(Math.random() * 6)
}