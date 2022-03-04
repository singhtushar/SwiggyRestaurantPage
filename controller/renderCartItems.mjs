import { itemsList } from "../model/data.mjs";

export function renderCartItems(itemsInCart) {
    
    const isEmpty = Object.keys(itemsInCart).length === 0;
    if(!isEmpty) {
        console.log("cart contains items");
        document.getElementById('items-present').style.display = 'none';
        document.getElementById('cart-header').style.display = 'block';
    } else {
        console.log("cart is empty");
        document.getElementById('items-present').style.display = 'block';
        document.getElementById('cart-header').style.display = 'none';
    }

    /*for(const item in itemsInCart) {
        console.log(item, itemsInCart[item]);
    }

    orderedItemInfo = [
        {
            isVeg,
            name,
            count,
            price
        },
    ]*/

    const orderedItemInfo = [];
    for(let item in itemsInCart) {
        const itemName = item;
        const itemCount = itemsInCart[`${item}`];
        let obj = {};
        itemsList.forEach((eachItem, index)=>{
            if(eachItem.name === itemName) {
                obj = eachItem;
                obj.count = itemCount;
                orderedItemInfo.push(obj);
            }
        })
    }

    // console.log(orderedItemInfo);

    const cartItemContainer = document.getElementById('display-items');

    cartItemContainer.innerHTML = "";

    let totalPrice = 0;

    orderedItemInfo.forEach((item, index)=>{
        const eachItemContainer = document.createElement('div');
        eachItemContainer.classList.add('each-item-container');

        // creating item type icon
        const itemTypeIcon = document.createElement('div');
        itemTypeIcon.classList.add('each-item-container-child1');
        itemTypeIcon.innerHTML = `${item.isVeg?`<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"
        alt="" />`:`<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg" alt="" />`}`;

        // item name
        const itemName = document.createElement('div');
        itemName.classList.add('each-item-container-child2');
        itemName.innerHTML = `${item.name}`;

        // item quantity
        const itemCount = document.createElement('div');
        itemCount.classList.add('each-item-container-child3');
        // itemCount.classList.add('btn-wrapper');
        const incrementBtn = document.createElement('button');
        incrementBtn.classList.add('cart-quantity-btn');
        incrementBtn.setAttribute("name", `${item.name}`);
        incrementBtn.innerHTML = "+";
        const decrementBtn = document.createElement('button');
        decrementBtn.classList.add('cart-quantity-btn');
        decrementBtn.setAttribute("name", `${item.name}`);
        decrementBtn.innerHTML = "-";
        const addText = document.createElement('div');
        addText.classList.add('display-item-quantity');
        addText.innerHTML = `${item.count}`;
        itemCount.appendChild(decrementBtn);
        itemCount.appendChild(addText);
        itemCount.appendChild(incrementBtn);

        //item price
        const itemPrice = document.createElement('div');
        itemPrice.classList.add('each-item-container-child4');
        itemPrice.innerHTML = `&#8377; ${item.price*item.count}`;

        totalPrice += item.price*item.count;

        eachItemContainer.appendChild(itemTypeIcon);
        eachItemContainer.appendChild(itemName);
        eachItemContainer.appendChild(itemCount);
        eachItemContainer.appendChild(itemPrice);

        cartItemContainer.appendChild(eachItemContainer);
    })

    if(totalPrice>0) {
        const subTotal = document.createElement('div');
        subTotal.innerHTML = `<h3>Subtotal</h3>`;

        const amount = document.createElement('div');
        amount.classList.add('subtotal');
        amount.innerHTML = `<h3>&#8377; ${totalPrice}</h3>`;

        const subTotalContainer = document.createElement('div');
        subTotalContainer.classList.add('subtotal-container');
        
        subTotalContainer.appendChild(subTotal);
        subTotalContainer.appendChild(amount);

        const checkoutBtn = document.createElement('button');
        checkoutBtn.setAttribute('id','checkout-btn');
        checkoutBtn.type = 'submit';
        checkoutBtn.innerHTML = `<h3>CHECKOUT &#8594;</h3>`;

        cartItemContainer.appendChild(subTotalContainer);
        cartItemContainer.appendChild(checkoutBtn);

        document.getElementById('checkout-btn').addEventListener('click', ()=>{
            console.log('success');
            orderedItemInfo.forEach((item)=>{
                let lstorageVal = {
                    count: item.count,
                    price: item.price
                }
                localStorage.setItem(`${item.name}`, JSON.stringify(lstorageVal));
            })
        })

    }

}