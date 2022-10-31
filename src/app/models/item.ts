import Product from "./product";

export default class QItem {
    product: Product;
    quantity: number;
    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}
