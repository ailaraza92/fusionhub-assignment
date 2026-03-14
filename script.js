// MOBILE MENU

const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {

nav.classList.toggle("active");

});


// SCROLL TO TOP

const topBtn = document.getElementById("topBtn");

window.onscroll = () => {

if(document.documentElement.scrollTop > 200){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

topBtn.onclick = () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

};
