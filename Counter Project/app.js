// Select the targeting element 

const value = document.querySelector("#value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

// initial counter 

let count = 0;

// decreaseing event

decrease.addEventListener("click",()=>{
    // count decrease 
    count--;
    upDateCounter();
});


//reset event

reset.addEventListener("click",()=>{
    // reset
    count = 0;
    upDateCounter();
});

//increase event

increase.addEventListener("click",()=>{
    // increase 
    count++;
    upDateCounter();
});

// count change value function 

function upDateCounter(){
    value.textContent = count;

    if(count < 0){
        value.style.color ="red";
    } 
    if(count > 0){
        value.style.color ="green";
    }
    if(count === 0){
        value.style.color ="#222";
    }
}
