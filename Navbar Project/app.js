// Targeting element 

const toggle= document.querySelector(".toggle");
const links = document.querySelector(".links");

// event listener on toggle btn 

toggle.addEventListener("click" , function(){
    toggle.classList.toggle("active");

    if(toggle.classList.contains("active")){
        links.classList.add("show-links")
    } else{
        links.classList.remove("show-links")
    }
    
})