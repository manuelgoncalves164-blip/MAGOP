// LOADER

window.onload = function(){

document.getElementById("loader").style.display="none";

loadGallery();

};

// MENU MOBILE

document.getElementById("menuToggle").onclick=function(){

document.getElementById("nav").classList.toggle("active");

};

// ANIMAÇÃO APPLE STYLE

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll(".reveal").forEach(function(el){

observer.observe(el);

});

// GALERIA DINÂMICA

function loadGallery(){

let gallery=document.getElementById("gallery");

if(!gallery) return;

gallery.innerHTML="";

let images=JSON.parse(localStorage.getItem("images")||"[]");

images.forEach(function(src){

let img=document.createElement("img");

img.src=src;

gallery.appendChild(img);

});

}

// UPLOAD ADMIN

function addImage(){

let file=document.getElementById("upload").files[0];

let reader=new FileReader();

reader.onload=function(e){

let images=JSON.parse(localStorage.getItem("images")||"[]");

images.push(e.target.result);

localStorage.setItem("images",JSON.stringify(images));

alert("Imagem adicionada com sucesso");

};

reader.readAsDataURL(file);

}
