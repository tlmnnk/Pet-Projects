//jshint esversion: 6

class ServiceCart {
    constructor(containerCounter, containerCart, productsCatalog){
        this.containerCounter = document.querySelector(containerCounter);
        this.containerCart = document.querySelector(containerCart);
        this.productsCatalog = productsCatalog;
        this.create();
    }

    create() {
        this.containerCounter.addEventListener('click', function(){
            serviceCart.containerCart.style.display = 'flex';
            const productCart = serviceCart.getProductsCart();
            let wrapper = document.createElement('slot');

            for (let i =0; i < productCart.length; i++) {

                const item = serviceCreateElement.getElement({tagName: 'div', className: 'item'});
                const name = serviceCreateElement.getElement({tagName: 'div', className: 'item__title', innerText: productCart[i].name});
                const image = serviceCreateElement.getElement({tagName: 'div', className: 'item__img', backgroundImage: `url(${productCart[i].img}`});
                const price = serviceCreateElement.getElement({tagName: 'div', className: 'item__price', innerText: productCart[i].price});

                item.appendChild(name);
                item.appendChild(image);
                item.appendChild(price);
                wrapper.appendChild(item);          
            }

            const close = serviceCreateElement.getElement({tagName: 'div', className: 'cart__close'})
            close.addEventListener('click', function() {
                serviceCart.containerCart.innerHTML = '';
                serviceCart.containerCart.style.display = 'none';
            });
            serviceCart.containerCart.appendChild(wrapper);
            serviceCart.containerCart.appendChild(close);
        
    });}

    getProductsCart() {
        const products = serviceStore.getProducts();
        console.log(products)
        let productCart = [];
        for (let i = 0; i < this.productsCatalog.length; i++) {
            if (products.indexOf(this.productsCatalog[i].id) !== -1) {
                productCart.push(this.productsCatalog[i]);
            }
        }
        console.log(productCart);
        return productCart;
    }
}

const serviceCart = new ServiceCart('.container__counter', '.container__cart', productCatalog);