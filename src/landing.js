import fancyFoodImage from './fancyfood.png';
import './landing-style.css';

export default function createHome(){
    //create landing 
    let landing = document.createElement('div');
    landing.classList.add("landing");

    let name = document.createElement('h1');
    name.textContent = "My Fancy Restaurant";
    name.classList.add('name');

    let landingimage = document.createElement('img'); 
    landingimage.src = fancyFoodImage;
    landingimage.id = "foodimage";
    landingimage.alt = "Fancy Food";

    let blurbOne = document.createElement('div');
    blurbOne.classList.add('blurb');

    let blurbOneHeader = document.createElement('h2');
    blurbOneHeader.textContent = "Three Michelin Star";

    let blurbOnePara = document.createElement('p');
    blurbOnePara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit natus deserunt nobis at voluptate,doloremque laborum molestias asperiores quibusdam dolores temporibus nemo ad consequatur ab sequi ipsam ullam eaque deleniti."

    blurbOne.appendChild(blurbOneHeader);
    blurbOne.appendChild(blurbOnePara);

    let blurbTwo = document.createElement('div');
    blurbTwo.classList.add('blurb');

    let blurbTwoHeader = document.createElement('h2');
    blurbTwoHeader.textContent = "Great Dining Experience";

    let blurbTwoPara = document.createElement('p');
    blurbTwoPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit natus deserunt nobis at voluptate,doloremque laborum molestias asperiores quibusdam dolores temporibus nemo ad consequatur ab sequi ipsam ullam eaque deleniti."


    blurbTwo.appendChild(blurbTwoHeader);
    blurbTwo.appendChild(blurbTwoPara);

    let hours = document.createElement('div');
    hours.classList.add("hours");

    let hoursInfo = document.createElement('h3');
    hoursInfo.textContent = "Mon-Sun: 12pm - 11pm";

    hours.appendChild(hoursInfo);

    let location = document.createElement('div');
    location.classList.add("location");

    let locationInfo = document.createElement('h3');
    locationInfo.textContent = "123 Fake Street, Citifake, New Fakeland";

    location.appendChild(locationInfo);


    landing.appendChild(name);
    landing.appendChild(landingimage);
    landing.appendChild(blurbOne);
    landing.appendChild(blurbTwo);
    landing.appendChild(hours);
    landing.appendChild(location);
    return landing;
}