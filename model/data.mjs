import { ItemBuilder } from "./itemBuilder.mjs";


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

export { itemsList };