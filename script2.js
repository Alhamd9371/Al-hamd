document.addEventListener("DOMContentLoaded", function(event) {
    // window.scrollTo({
    //     top: 0,
    //     left: 0, 
    //     behavior: 'smooth'
    // });

    window.onload = function() {
        window.scrollTo(0,0);
    }

}); 

let text = document.getElementById('scroll-text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 0.5 + 'px';
})

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}