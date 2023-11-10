// Select the target element 

const tabBtn = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

// hide all content 


content.forEach((contentItem, index) => {
    if (index === 0) {
        contentItem.classList.remove("hide-content")
    } else {
        contentItem.classList.add("hide-content");
    }
});

// for btn 

tabBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const id = e.currentTarget.getAttribute("data-id");
        const isActive = e.currentTarget.classList.contains("active");

        if (!isActive) {
            content.forEach((contentItem)=>{
                contentItem.classList.add("hide-content")
            });
        }

        // for content 

        content.forEach((contentItem) => {
            const contentValue = contentItem.getAttribute("data-value");
            if (contentValue === id) {
                contentItem.classList.remove("hide-content");
            }
        });

        // now adding the active btn class to btn tabs 

        tabBtn.forEach((tabBtn)=>{
            tabBtn.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

    });
});

