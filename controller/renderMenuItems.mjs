import { renderItemQuantity } from "./renderItemQuantity.mjs";

const menuItemClass = document.getElementsByClassName('menu-items');
export function renderMenuItems(itemsList) {
    menuItemClass[0].innerHTML = "";
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.innerHTML = 'Recommonded';

    menuItemClass[0].appendChild(menuHeader);
    
    itemsList.forEach((item, index)=>{
        // item type div
        const itemTypeDiv = document.createElement('div');
        itemTypeDiv.classList.add('item-type-icon');
        itemTypeDiv.innerHTML = `${item.isVeg?`<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"
        alt="" />`:`<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg" alt="" />`}`;

        // item name div
        const itemNameDiv = document.createElement('div');
        itemNameDiv.classList.add('item-name');
        itemNameDiv.innerHTML = item.name;

        // item price div;
        const itemPriceDiv = document.createElement('div');
        itemPriceDiv.classList.add('item-price');
        itemPriceDiv.innerHTML = `&#8377; ${item.price}`;

        // item description div;
        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item-description');
        itemDescription.innerHTML = item.description;

        // item image div
        const itemImage = document.createElement('div');
        itemImage.classList.add('item-image');
        itemImage.style.display = 'float-right';
        itemImage.innerHTML = `<img src="./images/swiggy display image.jpeg" style="height: 70px;" />`;

        // item quantity button
        const incrementBtn = document.createElement('button');
        incrementBtn.classList.add('quantity-btn');
        incrementBtn.setAttribute("name", `${item.name}`);
        incrementBtn.innerHTML = "+";
        const decrementBtn = document.createElement('button');
        decrementBtn.classList.add('quantity-btn');
        decrementBtn.setAttribute("name", `${item.name}`);
        decrementBtn.innerHTML = "-";

        //btnWrapper div
        const btnWrapperDiv = document.createElement('div');
        btnWrapperDiv.classList.add('btn-wrapper');
        const addText = document.createElement('div');
        addText.classList.add('display-item-quantity');
        addText.innerHTML = "ADD";
        if(localStorage.getItem(item.name)){
            item.count = `${JSON.parse(localStorage.getItem(item.name)).count}`;
            addText.innerHTML = `${JSON.parse(localStorage.getItem(item.name)).count}`;
        } 
        btnWrapperDiv.appendChild(decrementBtn);
        btnWrapperDiv.appendChild(addText);
        btnWrapperDiv.appendChild(incrementBtn);

        const leftContainerDiv = document.createElement('div');
        leftContainerDiv.classList.add('left-container');
        leftContainerDiv.appendChild(itemTypeDiv);
        leftContainerDiv.appendChild(itemNameDiv);
        leftContainerDiv.appendChild(itemPriceDiv);
        leftContainerDiv.appendChild(itemDescription);

        const rightContainerDiv = document.createElement('div');
        rightContainerDiv.classList.add('right-container');
        const rightContainerChild = document.createElement('div');
        rightContainerChild.classList.add('image-container')

        rightContainerChild.appendChild(itemImage);
        rightContainerChild.appendChild(btnWrapperDiv);
        rightContainerDiv.appendChild(rightContainerChild);
        const container = document.createElement('div');
        container.classList.add('item-container');
        container.appendChild(leftContainerDiv);
        container.appendChild(rightContainerDiv);

        const borderDiv = document.createElement('div');
        borderDiv.classList.add('container-division-border');

        menuItemClass[0].appendChild(container);
        menuItemClass[0].appendChild(borderDiv);
    })

    renderItemQuantity();

}