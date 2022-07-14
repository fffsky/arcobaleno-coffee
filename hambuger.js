let nav = document.querySelector("#navArea");
let inner = document.querySelector(".inner");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () =>{
    nav.classList.toggle("open");
};
inner.onclick = () =>{
    nav.classList.toggle("open");
};
mask.onclick = () =>{
    nav.classList.toggle("open");
};