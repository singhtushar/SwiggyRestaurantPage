import { renderMenuItems } from "./renderMenuItems.mjs";
import { itemsList } from "../model/data.mjs";

export function renderVegOnly() {
    var checkbox = document.querySelector("input[name=veg-only]");

    checkbox.addEventListener('change', function() {
        const vegItems = [];
        if (this.checked) {
            itemsList.forEach((item)=>{
                if(item.isVeg === true)
                    vegItems.push(item);
            })

            renderMenuItems(vegItems);

        } else {
            renderMenuItems(itemsList);
        }
    });
}