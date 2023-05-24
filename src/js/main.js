// TABLE OF CONTENT 
// 1. Theme Toggle
// 2. Mobile Navigation button and Menu.
// 3. Intersection Observers.
// 4. Change text with js







// ============= NAVIGATION BUTTON ===============
const navButton = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navOverlay = document.querySelector(".nav-overlay");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;
navButton.addEventListener("click", openMenu);
navOverlay.addEventListener("click", openMenu);
navItem.forEach(item => {
    item.addEventListener("click", openMenu)
})

function openMenu () {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navOverlay.classList.add("show");
        navItem.forEach(item => {
            item.classList.add("show");
        });
        // document.body.classList.add("no-scroll");
        showMenu = true;
    }else {
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navButton.classList.remove("show");
        navOverlay.classList.remove("show");
        navItem.forEach(item => {
            item.classList.remove("show");
        });
        // document.body.classList.remove("no-scroll");
        showMenu = false;
    }
}









// ================== INTERSECTION OBSERVER =====================
const sectionHero = document.querySelector("#hero");
const toTopButton = document.querySelector('.to-top');
const navBar = document.querySelector('.nav-bar');
const options = {
    rootMargin: "-100px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            toTopButton.classList.add("visible");
            navBar.classList.add("box-shadow");
        }else{
            toTopButton.classList.remove("visible");
            navBar.classList.remove("box-shadow");
        }
    })
}, options)

observer.observe(sectionHero);














// ========================= Frequently Asked Questions =======================
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var parent = this.parentElement;
    var panel = this.nextElementSibling;
    var mainPanel = document.querySelector(".main-panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // panel.style.border = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      parent.style.maxHeight =
        parseInt(parent.style.maxHeight) + panel.scrollHeight + "px";
    }
  });
}
// End of Frequently Asked Question Section
