//jshint esversion: 6


class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
     
    constructor(product) {
        this.product = product;

    }

    render() {
        const prodEl = document.createElement('li');
          prodEl.className = 'product-item';
          prodEl.innerHTML = `
          <div>
              <img src="${this.product.imageUrl}" alt="${this.product.title}">
              <div class='product-item__content'>
                  <h2>${this.product.title}</h2>
                  <h3>\$${this.product.price}</h3>
                  <p>${this.product.description}</p>
                  <button>Add to Cart</button>
              </div>
              </div>
          `;
          return prodEl;
    }
}


class ProductList {
    products = [
        new Product(
        'A sofa',
         'https://m.media-amazon.com/images/I/91VMNtOVYpL._SR400,500_.jpg',
        'Cosy living room sofa',
        143.99
        ),
        new Product(
        'A carpet',
        'https://images-eu.ssl-images-amazon.com/images/G/31/acs/amazon-designer/2017/07/28/DURM-56D2B2BA5E4C72EJ.jpeg',
        'A nice looking carpet',
        89.99
        )
    ];

    constructor() {}

    render() {  
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products) {
          const product = new ProductItem(prod);
          const prodEl = product.render();
          prodList.append(prodEl);
        }
        renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();