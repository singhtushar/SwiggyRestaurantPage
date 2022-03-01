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

const addItem = document.getElementsByClassName('increment-item');
const decrementItem = document.getElementsByClassName('decrement-item');

function wrapper1() {

    // console.log(addItem);
    // console.log(decrementItem);

    let itemsInCart = {}; // it will go into model
    console.log(addItem);
    
    for(let i=0;i<addItem.length;i++) {
        let count=0;
        addItem[i].addEventListener('click', function() {
            const div = this.previousElementSibling;
            count++;
    
            div.innerHTML = `&nbsp;&nbsp;${count}&nbsp;&nbsp;`;

            // console.log(div.getAttribute('name'));

            const itemName = div.getAttribute('name');
            if(itemsInCart[`${itemName}`] === undefined)
            itemsInCart[`${itemName}`] = 1;
            else
            itemsInCart[`${itemName}`]++;
            // console.log(itemsInCart);

            displayCartItems(itemsInCart);
            
        })

        decrementItem[i].addEventListener('click', function() {
            const div = this.nextElementSibling;
            count--;
            count = Math.max(count, 0);
            if(count <= 0)
                div.innerText='ADD';
            else
            div.innerHTML = `&nbsp;&nbsp;${count}&nbsp;&nbsp;`;

            // console.log(div.getAttribute('name'));

            const itemName = div.getAttribute('name');
            if(itemsInCart[`${itemName}`] === undefined || itemsInCart[`${itemName}`]<=0)
                delete itemsInCart[`${itemName}`];
            else{
                itemsInCart[`${itemName}`]--;
                if(itemsInCart[`${itemName}`]<=0)
                delete itemsInCart[`${itemName}`];
            }
            // console.log(itemsInCart)

            displayCartItems(itemsInCart);

        })

    }

}

wrapper1();

function displayCartItems(itemsInCart) {
    const x = document.querySelector('#items-present');
    x.style.display = 'none';
    const mainDiv = document.querySelector('.display-items');
    mainDiv.innerHTML = "";
    for(let item in itemsInCart) {
        // console.log(`${item}: ${itemsInCart[item]}`)
        const divp = document.createElement('div');
        divp.setAttribute('class', 'item-quantity');
        divp.style.border = '1px solid black';
        const p1 = document.createElement('div');
        const p2 = document.createElement('div');
        const p3 = document.createElement('div');
        p1.innerHTML = '-';
        p1.setAttribute('class', 'decrement-item');
        // console.log(p1);

        p2.innerHTML = `${itemsInCart[item]}`
        p2.setAttribute("name", `${item}`);
        p2.setAttribute("class", "ordered-item");
        p2.setAttribute("class", "item-quantity");
        // p.innerHTML = `${item}: ${itemsInCart[item]}`;
        p3.innerHTML = '+';
        p3.setAttribute("class", "increment-item");
        const span = document.createElement('span');
        span.innerHTML = `${item}&nbsp;&nbsp;`;
        // console.log(p3);
        divp.appendChild(span);
        divp.appendChild(p1);
        divp.appendChild(p2);
        divp.appendChild(p3);
        mainDiv.appendChild(divp);
    }

}




