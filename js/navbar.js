// script that adds navbar to every page from navbar.html

fetch('/Labb1_SkapaCV_Sida/html/navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#add_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})