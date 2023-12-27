export default class Product {
    id;
    title;
    price;
    description;
    image;

    constructor(id, title = null, price = null, description = null, image = null) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}