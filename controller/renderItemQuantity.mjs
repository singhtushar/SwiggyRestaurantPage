import { renderCartItems } from "./renderCartItems.mjs";
import { itemsList } from "../model/data.mjs";

export function renderItemQuantity() {
    var itemsInCart = {};
    itemsList.forEach((item)=>{
        if(localStorage.getItem(item.name)) {
            itemsInCart[`${item.name}`] = JSON.parse(localStorage.getItem(item.name)).count;
            item.count = JSON.parse(localStorage.getItem(item.name)).count;
        }
    })
    renderCartItems(itemsInCart);
    const itemClicked = document.getElementsByClassName('quantity-btn');
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
                    itemsList.forEach((item)=>{
                        if(item.name === itemClicked[i].name)
                            item.count = count;
                    })
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
                    itemsList.forEach((item)=>{
                        if(item.name === itemClicked[i].name)
                            item.count = count;
                    })
                }
                
                itemQuantity.innerHTML = `${itemsInCart[`${itemClicked[i].name}`]}`; 
            }
            // console.log(itemsInCart);
            renderCartItems(itemsInCart);
        })
    }
}