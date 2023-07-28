const content = document.getElementsByTagName("main")[0];
const navbar = document.getElementsByTagName("nav")[0];
const foot = document.getElementsByTagName("footer")[0];
const jumbotron = document.getElementsByClassName("jumbotron");
const art = document.getElementsByName("article");
const buttons = document.querySelectorAll(".title");

function theme() {
    content.classList.toggle("themechange");
    navbar.classList.toggle("navtheme");
    foot.classList.toggle("foottheme");
    // jumbotron.classList.toggle("darkjumbo");
    for(let item3 of jumbotron) {
        item3.classList.toggle("darkjumbo");
    }
    for(let item1 of art) {
        item1.classList.toggle("artchange");
    }
    for(let item of buttons) {
        item.classList.toggle("titletheme");
    }
    document.getElementById('jumbotron').src  = 'car3.jpg';

}
