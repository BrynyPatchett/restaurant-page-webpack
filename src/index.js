import navbar from './navbar.js';
import home from './landing.js';
import './style.css';

const body = document.querySelector("body");
const contentDisplay = document.querySelector('#content');

//initalize Page
(function (){
     body.insertBefore(navbar(),body.firstChild)
    contentDisplay.appendChild(home());
})();






// console.log("FLEXO");