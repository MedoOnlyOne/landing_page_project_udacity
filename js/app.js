// Helper functions

// add the sections names to the nav menu
function creatNav(){
    /*
    for each section in the DOM creat li which contains anchor tag that has
    inner text with the value of the data-nav attribute for the section and href with the section id,
    add the menu link class to this li,
    append this anchor tag to the li,
    then append it to the ul*/
    const ul = document.querySelector("#navbar__list");
    const sections = document.querySelectorAll("section");
    for (let section of sections){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = section.getAttribute("data-nav");
        a.setAttribute("href", `#${section.getAttribute("id")}`);
        a.classList.add("menu__link");
        li.appendChild(a);
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