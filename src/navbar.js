 import './navbar-style.css';

 export {navbar as default};

    const navbar = document.createElement('nav');
    navbar.classList.add("navbar");

    let navOne = document.createElement('div');
    navOne.classList.add("navitem");
    let navTwo = document.createElement('div');   
    navTwo.classList.add("navitem"); 
    let navThree = document.createElement('div');
    navThree.classList.add("navitem");

    navOne.textContent = "Home";
    navTwo.textContent = "Menu";
    navThree.textContent = "Contact";

    navbar.appendChild(navOne);
    navbar.appendChild(navTwo);
    navbar.appendChild(navThree);