import navbar from './navbar.js';
import landing from './landing.js';
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
//Add Lister to landing nav (home on nav bar)
navbar.childNodes[0].addEventListener('click',() => {
    navClick(landing);
});
//Add Lister to Menu nav
navbar.childNodes[1].addEventListener('click',() => {
    navClick(menu);
});
//Add Lister to Contact nav
navbar.childNodes[2].addEventListener('click',() => {
    navClick(contact);
});

console.log(navbar);

//initalize Page
(function (){
    //insert nav above content div as it is never removed
    body.insertBefore(navbar,body.firstChild);
    //display inisial landing page
    contentDisplay.appendChild(landing());
})();
