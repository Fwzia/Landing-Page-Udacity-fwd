/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
for (section of sections) {
    navbarList.innerHTML += `<li>
        <a href="#${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>
    </li>`
}

let links = navbarList.querySelectorAll('a')

// Add class 'active' to section when near top of viewport
window.onscroll = function() {
    // i = get index of the nearest section
    let nearestSection = 0
    for (let i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 100) {
            nearestSection = i
        }
    }
    // remove active class from all li except at index i
    for (let i = 0; i < links.length; i++) {
        if (i == nearestSection) {
            links[i].parentElement.classList.add('active')
        } else {
            links[i].parentElement.classList.remove('active')
        }
    }
}


// Scroll to anchor ID using scrollTO event
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault()
        window.scrollTo(0, sections[i].offsetTop)
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active