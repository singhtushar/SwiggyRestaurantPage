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
        this.count = 0;
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
    setCount(cnt){
        this.count = cnt;
        return this;
    }

    build() {
        return new Item(this.name, this.isVeg, this.isBestSeller, this.price, this.description, this.image, this.category, this.count);
    }
}

export { ItemBuilder };