import { itemsList  } from "./model/data.mjs";
import { renderMenuItems } from "./controller/renderMenuItems.mjs";
import { renderItemQuantity } from "./controller/renderItemQuantity.mjs";
import { renderSearchBar } from "./controller/renderSearchItems.mjs";
import { renderVegOnly } from "./controller/renderVegOnly.mjs";
import { renderCartItems } from "./controller/renderCartItems.mjs";
 
(function () {
    const dropdown = document.getElementsByClassName("menu-content");
    for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
})();

renderMenuItems(itemsList);
renderItemQuantity();
renderSearchBar();
renderVegOnly();







