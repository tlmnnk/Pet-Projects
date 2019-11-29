//jshint esversion: 6


class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.image = image;
        this.description = desc;
        this.price = price;
    }
}
const productList = {
    products: [
        new Product(
        'A sofa',
         'https://m.media-amazon.com/images/I/91VMNtOVYpL._SR400,500_.jpg',
         143.99,
        'Cosy living room sofa'
        ),
        new Product(
        'A carpet',
        'https://images-eu.ssl-images-amazon.com/images/G/31/acs/amazon-designer/2017/07/28/DURM-56D2B2BA5E4C72EJ.jpeg',
        89.99,
        'A nice looking carpet'
        )
    ],
    render() {  
          const renderHook = document.getElementById('app');
          const prodList = document.createElement('ul');
          prodList.className = 'product-list';
          for(const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class='product-item__content'>
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
                </div>
            `;
            prodList.append(prodEl);
          }
          renderHook.append(prodList);
    }
};

productList.render();