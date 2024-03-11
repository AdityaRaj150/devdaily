function home() {
   window.location.href = "/home"
}

function aboutme() {
    window.location.href = "/about-me"
 }

 function learnreact() {
    window.location.href = "/learn-react"
 }

 function learnphp() {
    window.location.href = "/learn-php"
 }
 function learncss() {
    window.location.href = "/learn-css"
 }

 var i = 0;

const text = "Learn Web Development daily..."
const para = document.querySelector(".para");

function write(){
    i++
    if(i === text.length) para.innerHTML = "<p>" + text.substring(0,i) + "</p>"
        
    else {
        para.innerHTML = "<p>" + text.substring(0,i) + "|" + "</p>"
        setTimeout(write, 100);
    }
  
}

 window.onload = function() {
    document.querySelectorAll(".course").forEach( c=> {
        c.style.opacity = "1";
    })
    write();
    document.querySelector(".image img").classList.add("image-rotate")
    document.querySelector(".container").style.margin = "50px auto";
};


const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", ()=> {
   document.querySelector(".line1").classList.toggle("line1-animation");
   document.querySelector(".line2").classList.toggle("line2-animation");
   document.querySelector(".line3").classList.toggle("line3-animation");
   document.querySelectorAll(".hamburger-menu div").forEach(d => {
      d.classList.toggle("hamburger-menu-div-animation");
   })  

   document.querySelector(".hamburger-menu").classList.toggle("hamburger-menu-animation");
})


