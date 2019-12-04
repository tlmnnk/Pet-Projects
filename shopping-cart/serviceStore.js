//jshint esversion: 6

class ServiceStore{
    constructor() {}

    getProducts(){
        let products = [];
        const productLocalStorage = localStorage.getItem("products");
        if(productLocalStorage !== null) {
            products = JSON.parse(productLocalStorage);
        }
       return products;
    }

    putProduct(id) {
        const products = this.getProducts();
        const index = products.indexOf(id);
        let pushProduct;
        
        if(index === -1) {
            products.push(id);
            pushProduct = true;
        }
        else {
            products.splice(index, 1);
            pushProduct = false;
        }
        
        localStorage.setItem('products', JSON.stringify(products));

        return {
            pushProduct: pushProduct,
            products: products
        };
    }
}

const serviceStore = new ServiceStore();