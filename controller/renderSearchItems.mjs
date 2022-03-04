import { itemsList } from "../model/data.mjs";
import { renderMenuItems } from "./renderMenuItems.mjs";
export function renderSearchBar() {
    const searchInput = document.querySelector('input[type=text]');
    searchInput.addEventListener('input', ()=>{
        const inputStr = `${searchInput.value}`.toLowerCase();
        if(inputStr.length === 0) {
            renderMenuItems(itemsList);
        } else {
            var renderItems = [];
            itemsList.forEach((item, index)=>{
                const itemStr = item.name.toLowerCase();
                if(itemStr.includes(inputStr)){
                    renderItems.push(item);
                }
            })
            renderMenuItems(renderItems);
        }

    })
}