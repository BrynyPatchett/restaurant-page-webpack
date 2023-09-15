import navbar from './navbar.js';
import home from './landing.js';
import './style.css';

const body = document.querySelector("body");
const contentDisplay = document.querySelector('#content');

//clearContent of page
function clearContent(){
    contentDisplay.childNodes.forEach(node => {
        contentDisplay.removeChild(node);
    });
};

function navClick(navTarget){
    clearContent();
    contentDisplay.appendChild(navTarget());
}
//Add Lister To Home nav
navbar.childNodes[0].addEventListener('click',() => {
    console.log("AND IM GOING HOME");
    navClick(home);
});
//Add Lister To Menu nav
navbar.childNodes[1].addEventListener('click',() => {
    console.log("WHATS ON THE MENU");
    navClick(home);
});
//Add Lister To Contact nav
navbar.childNodes[2].addEventListener('click',() => {
    console.log("PLEASE CALL ME NOW");
    navClick(home);
});

console.log(navbar);

//initalize Page
(function (){
     body.insertBefore(navbar,body.firstChild)
     contentDisplay.appendChild(home());
})();
