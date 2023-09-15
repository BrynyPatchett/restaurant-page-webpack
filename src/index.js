import navbar from './navbar.js';
import home from './landing.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';

const body = document.querySelector("body");
const contentDisplay = document.querySelector('#content');

//clearContent of page
function clearContent(){
    console.log(contentDisplay);
    contentDisplay.childNodes.forEach(node => {
        contentDisplay.removeChild(node)
    });
};

function navClick(navTarget){
    clearContent();
    contentDisplay.appendChild(navTarget());
}
//Add Lister To Home nav
navbar.childNodes[0].addEventListener('click',() => {
    navClick(home);
});
//Add Lister To Menu nav
navbar.childNodes[1].addEventListener('click',() => {
    navClick(menu);
});
//Add Lister To Contact nav
navbar.childNodes[2].addEventListener('click',() => {
    navClick(contact);
});

console.log(navbar);

//initalize Page
(function (){
     body.insertBefore(navbar,body.firstChild)
     contentDisplay.appendChild(home());
})();
