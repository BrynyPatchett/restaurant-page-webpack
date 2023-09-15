import './contact-style.css';


export default function () {
    let contact  = document.createElement("div");
    contact.classList.add("contact");

    let contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact";

    contact.appendChild(contactTitle);

    let contactSection = document.createElement("div");
    contactSection.classList.add("contactSection");

    let contactInfo = document.createElement("div");
    contactInfo.classList.add("contactinfo");

    let contactHours = document.createElement("div");

    let hours = document.createElement("h4");
    hours.textContent = "Mon-Sun: 12pm - 11pm";

    contactHours.appendChild(hours);

    let contactLocation = document.createElement("div");

    let location = document.createElement("h4");
    location.textContent = "123 Fake Street, Citifake, New Fakeland";

    contactLocation.appendChild(location);


    let contactPhone = document.createElement("div");

    let phone = document.createElement("h4");
    phone.textContent = "Phone Number: 0800 012 3456";

    contactPhone.appendChild(phone);

    contactInfo.appendChild(contactHours);
    contactInfo.appendChild(contactLocation);
    contactInfo.appendChild(contactPhone);
    contactSection.appendChild(contactInfo);

    let mapDiv = document.createElement("div");
    mapDiv.classList.add("maplocation");

    let mapwrap = document.createElement("div");

    let map = document.createElement("div");
    map.classList.add("map");

    let mapCanvas = document.createElement("div");
    mapCanvas.id = "google-maps-canvas";

    let iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder","0");
    iframe.src = "https://www.google.com/maps/embed/v1/place?q=123+Fake+Street,+Oak+Lawn,+IL,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

    mapCanvas.appendChild(iframe);

    map.appendChild(mapCanvas);

    mapwrap.appendChild(map);

    mapDiv.appendChild(mapwrap);

    
    contactSection.appendChild(mapDiv);

    contact.appendChild(contactSection);

    let message = document.createElement("h1");
    message.textContent = "Book Your Food Experience Now!";
    
    contact.appendChild(contactSection);

    contact.appendChild(message);

    return contact;
}

