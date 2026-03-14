// HERO BUTTON
document.getElementById("heroBtn").addEventListener("click",()=>{
    alert("Welcome to The Fusion Hub!");
    const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{
nav.classList.toggle("active");
});
});

// SERVICES ARRAY
const services=[
    { name:"Website Development", image:"images/web.jpg" },
    { name:"UI/UX Design", image:"images/design.jpg" },
    { name:"Digital Marketing", image:"images/marketing.jpg" }
];

const container=document.getElementById("servicesContainer");

const displayServices=()=>{
    services.forEach(service=>{
        const card=document.createElement("div");
        card.classList.add("service-card");
        card.innerHTML=`
            <img src="${service.image}">
            <h3>${service.name}</h3>
        `;
        container.appendChild(card);
    });
};

displayServices();

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    const showMessage=(text)=>{ document.getElementById("formMsg").innerText=text; };
    if(name==="" || email==="" || message===""){ showMessage("Please fill all fields"); }
    else{ showMessage("Message sent successfully!"); }
});

// DARK MODE
document.getElementById("darkMode").addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 200){ topBtn.style.display = "block"; }
    else{ topBtn.style.display = "none"; }
}
topBtn.onclick = () => {
    window.scrollTo({ top:0, behavior:"smooth" });
}
