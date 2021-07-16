// Helper functions

// add the sections names to the nav menu
function creatNav(){
    /*
    for each section in the DOM creat a li which inner text is the data-nav attribute for the section,
    add the menu link class to this li,
    then append it to the ul*/
    const ul = document.querySelector("#navbar__list");
    const sections = document.querySelectorAll("section");
    for (let section of sections){
        let li = document.createElement("li");
        li.innerText = section.getAttribute("data-nav");
        li.classList.add("menu__link");
        ul.appendChild(li);
    }
}





// Apply the logic when the page loads
document.addEventListener("DOMContentLoaded", ()=>{
    /* 
    creat the nav bar 
    */
    creatNav();
});