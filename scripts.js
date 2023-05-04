const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");

menuBtn.addEventListener('click',() => {
    navItems.classList.toggle('active');
    menuBtn.classList.toggle('active');
    closeBtn.classList.toggle('active');
})

closeBtn.addEventListener('click',() => {
    navItems.classList.toggle('active');
    menuBtn.classList.toggle('active');
    closeBtn.classList.toggle('active');
})