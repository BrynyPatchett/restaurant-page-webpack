import './menu-style.css'


export default function () {
    let menu  = document.createElement("div");
    menu.classList.add('menu');

    let menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    menuTitle.id = "menuTitle";
    menu.appendChild(menuTitle);

    let foodItems = ["Wagyu Beef", "Japanese Matsutake Mushroom","Spanish Iberian Ham","Italian White Alba Truffle","Beluga Caviar"];
    let foodPrices = [200,81,98,65,90];

    for(let i = 0; i <foodItems.length; i++){
        let item  = document.createElement("div");
        item.classList.add('menuitemflex');

        let food  = document.createElement("p");
        food.textContent = foodItems[i];
        let price  = document.createElement("p");
        price.textContent = foodPrices[i];
    
        item.appendChild(food);
        item.appendChild(price);
        menu.appendChild(item);
    }

    let drinkTitle = document.createElement("h1");
    drinkTitle.textContent = "Drinks";
    drinkTitle.id = "menuTitle";
    menu.appendChild(drinkTitle);

    let drinkItems = ["Beer (Warm)","Wine","Water"];
    let drinkPrices = [24,199,17];

    for(let i = 0; i <foodItems.length; i++){
        let item  = document.createElement("div");
        item.classList.add('menuitemflex');

        let drink  = document.createElement("p");
        drink.textContent = drinkItems[i];
        let price  = document.createElement("p");
        price.textContent = drinkPrices[i];
    
        item.appendChild(drink);
        item.appendChild(price);
        menu.appendChild(item);
    }

    return menu;
}

// <!-- <div class="menu">
// <h1 id="menuTitle">Menu</h1>

// <div class="menuitemflex"><p>Wagyu Beef</p><p>$200</p></div>
// <div class="menuitemflex"><p>Japanese Matsutake Mushroom</p><p>$81</p></div>
// <div class="menuitemflex"><p>Spanish Iberian Ham </p><p>$98</p></div>
// <div class="menuitemflex"><p>Italian White Alba Truffle</p><p>$65</p></div>
// <div class="menuitemflex"><p>Beluga Caviar</p><p>$90</p></div>

// <h1 id="menuTitle">Drink</h1>

// <div class="menuitemflex"><p>Beer (Warm) </p><p>$24</p></div>
// <div class="menuitemflex"><p>Wine </p><p>$199</p></div>
// <div class="menuitemflex"><p>Water</p><p>$12</p></div>
// </div> -->


