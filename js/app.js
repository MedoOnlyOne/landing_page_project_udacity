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

// get active section
function getActiveSection(){
    /*
    loop over sections and if a section has top between -200 and 300 remove the previous active section
    and active link, then add them to the current section
    */
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("a");
    for (let section of sections){
        const sectionTop = section.getBoundingClientRect().top;
        
        // if a not active section has a top between -200 and 100
        if (sectionTop >= -200 && sectionTop <= 300 && !section.classList.contains("your-active-class")){
            // remove from previous
            for (prevSection of sections){
                if (prevSection.classList.contains("your-active-class")){
                    prevSection.classList.remove("your-active-class");
                    const prevLink = prevSection.getAttribute("data-nav");
                    for (let link of links){
                        if (link.innerText === prevLink){
                            link.classList.remove("active__link");
                            break;
                        }
                    }
                    break;
                }
            }
            // add to the new
            section.classList.add("your-active-class");
            const nav = section.getAttribute("data-nav");
            for (let link of links){
                if (link.innerText === nav){
                    link.classList.add("active__link");
                    break;
                }
            }
        }
    }
}


// Apply the logic when the page loads
document.addEventListener("DOMContentLoaded", ()=>{
    /* 
    creat the nav bar,
    put the active section and active link to the first section and link at the begining,
    and on scroll event call the get active section function
    */
    creatNav();
    document.querySelector("section").classList.add("your-active-class");
    document.querySelector("a").classList.add("active__link");
    document.addEventListener("scroll", ()=>{
        getActiveSection();
    });
    
});