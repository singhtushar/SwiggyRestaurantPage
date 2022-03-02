const dropdown = document.getElementsByClassName("menu-content");

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        // console.log(dropdownContent);
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function Item (name, isVeg, isBestSeller, price, description, image, category) {
    this.name = name;
    this.isVeg = isVeg;
    this.isBestSeller = isBestSeller;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
}

// Builder class for each item

class ItemBuilder {

    constructor() {
        this.name = '';
        this.isVeg = false;
        this.isBestSeller = false;
        this.price = 0;
        this.description = "";
        this.image = "";
        this.category = "";
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setIsVeg(isVeg) {
        this.isVeg = isVeg;
        return this;
    }

    setIsBestSeller(isBestSeller) {
        this.isBestSeller = isBestSeller;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setImage(image) {
        this.image = image;
        return this;
    }

    setCategory(category) {
        this.category = category;
        return this;
    }

    build() {
        return new Item(this.name, this.isVeg, this.isBestSeller, this.price, this.description, this.image, this.category);
    }
}

// const item = new ItemBuilder().setName("Platter").setPrice(299).build();

// console.log(item);

const item1 = new ItemBuilder().setName("Veg Platter").setIsVeg(true).setPrice(699).setCategory(["Recommonded", "Platter"]).setImage('../images/swiggy display image').setDescription("An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.");
const item2 = new ItemBuilder().setName("Non Veg Platter").setIsVeg(false).setPrice(899).setCategory(["Recommonded", "Platter"]).setImage('../images/swiggy display image').setDescription("An authentic non veg platter with 3 pieces of Barnala Mathi Chicken Tikka, 3 pieces of Dhaniya Chicken, 3 pieces of Tawa Chicken and 3 pieces of Chicken Kebab.");
const item3 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(true).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item4 = new ItemBuilder().setName("Dhaniya Chicken Tikka").setIsVeg(false).setIsBestSeller(true).setPrice(249).setCategory(["Recommonded", "Non Veg Starters"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item5 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item6 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item7 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item8 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item9 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item10 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item11 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item12 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item13 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");
const item14 = new ItemBuilder().setName("Butter Chicken").setIsVeg(false).setIsBestSeller(false).setPrice(249).setCategory(["Recommonded", "Main Course"]).setImage('../images/swiggy display image').setDescription("A classic chicken dish prepared in a rich sauce of tomato, butter and cream.");

const itemsList = [];
itemsList.push(item1);
itemsList.push(item2);
itemsList.push(item3);
itemsList.push(item4);
itemsList.push(item5);
itemsList.push(item6);
itemsList.push(item7);
itemsList.push(item8);
itemsList.push(item9);
itemsList.push(item10);
itemsList.push(item11);
itemsList.push(item12);
itemsList.push(item13);
itemsList.push(item14);

console.log(itemsList);

const menuItemClass = document.getElementsByClassName('menu-items');
console.log(menuItemClass);

var renderMenuItems = function () {
    
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
        btnWrapperDiv.appendChild(decrementBtn);
        const addText = document.createElement('div');
        addText.classList.add('display-item-quantity');
        addText.innerHTML = 'ADD';
        btnWrapperDiv.appendChild(addText);
        btnWrapperDiv.appendChild(incrementBtn)

        const leftContainerDiv = document.createElement('div');
        leftContainerDiv.classList.add('left-container');
        leftContainerDiv.appendChild(itemTypeDiv);
        leftContainerDiv.appendChild(itemNameDiv);
        leftContainerDiv.appendChild(itemPriceDiv);
        leftContainerDiv.appendChild(itemDescription);

        const rightContainerDiv = document.createElement('div');
        rightContainerDiv.classList.add('right-container');
        rightContainerDiv.appendChild(itemImage);
        rightContainerDiv.appendChild(btnWrapperDiv);

        const container = document.createElement('div');
        container.classList.add('item-container');
        container.appendChild(leftContainerDiv);
        container.appendChild(rightContainerDiv);

        const borderDiv = document.createElement('div');
        borderDiv.classList.add('container-division-border');

        menuItemClass[0].appendChild(container);
        menuItemClass[0].appendChild(borderDiv);
    })

}

var renderItemQuantity = function () {
    const itemClicked = document.getElementsByClassName('quantity-btn');
    var itemsInCart = {};
    for(let i=0;i<itemClicked.length;i++) {
        itemClicked[i].addEventListener('click', ()=>{
            if(itemClicked[i].innerHTML === '-'){
                const itemQuantity = itemClicked[i].nextElementSibling;
                if(itemsInCart[`${itemClicked[i].name}`] === undefined || itemsInCart[`${itemClicked[i].name}`]<=0){
                    delete itemsInCart[`${itemClicked[i].name}`];
                    itemQuantity.innerHTML = 'ADD'
                }
                else{
                    let count = itemsInCart[`${itemClicked[i].name}`]; 
                    if(count === 1) {
                        itemQuantity.innerHTML = 'ADD';
                        delete itemsInCart[`${itemClicked[i].name}`];
                    }
                    else{
                        count--;
                        itemsInCart[`${itemClicked[i].name}`] = count;
                        itemQuantity.innerHTML = `${itemsInCart[`${itemClicked[i].name}`]}`; 
                    }
                } 
            }
            else{
                const itemQuantity = itemClicked[i].previousElementSibling;
                if(itemsInCart[`${itemClicked[i].name}`] === undefined)
                    itemsInCart[`${itemClicked[i].name}`] = 1;
                else {
                    let count = itemsInCart[`${itemClicked[i].name}`];
                    count++;
                    itemsInCart[`${itemClicked[i].name}`] = count;
                }
                itemQuantity.innerHTML = `${itemsInCart[`${itemClicked[i].name}`]}`; 
            }
            console.log(itemsInCart);
            renderCartItems(itemsInCart);
        })
    }
}

var renderCartItems = function(itemsInCart) {
    for(const item in itemsInCart) {
        console.log(item, itemsInCart[item]);
    }
}

renderMenuItems();
renderItemQuantity();






