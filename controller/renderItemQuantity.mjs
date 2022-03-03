import { renderCartItems } from "./renderCartItems.mjs";

export function renderItemQuantity() {
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
            // console.log(itemsInCart);
            renderCartItems(itemsInCart);
        })
    }
}