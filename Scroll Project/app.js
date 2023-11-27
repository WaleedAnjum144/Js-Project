// slect the date 

const date = document.getElementById("date");
 date.innerHTML = new Date().getFullYear();

//  close links 

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".link-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    // first method 

    // linksContainer.classList.toggle("show-links");

    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}`;
    } else{
        linksContainer.style.height = 0;
    }

});

//  for fixed navbar 

const  navBar = document.getElementById("nav");
const topLink = document.querySelector(".toplink");

window.addEventListener("scroll" , function (){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add("fixed-nav");
    } else{
        navBar.classList.remove("fixed-nav");
    }

     

    if (scrollHeight > 500){
        console.log("helo")

        topLink.classList.add("show-links");
    } else{
        topLink.classList.remove("show-links");
    }

  
});

// *********** smoth scroll ***********

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {

    link.addEventListener("click", (e) => {
        e.preventDefault();

        // navigate to specific point 

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element =document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        // if the fixed nav is present then 

        const fixedNav = navBar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;


        if (!fixedNav){
            position = position - navHeight ;
        } 
        
        if (navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top:position ,
        });

        // close 

        linksContainer.style.height = 0;
    })
    
});