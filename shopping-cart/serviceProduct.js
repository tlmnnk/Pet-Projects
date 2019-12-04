//jshint esversion: 6

class ServiceProducts {
    constructor(containerProduct, containerCounter, produtcsCatalog) {
        this.container = document.querySelector(containerProduct),
        this.productCatalog = produtcsCatalog,
        this.containerCounter = document.querySelector(containerCounter),
        this.create()
    }

   /*  <div class="item">
        <div class="item__title">Cтул из дуба Halmar</div>
        <div class="item__img" style="background-image: url(img/halmar.jpg)"></div>
        <div class="item__price">1200</div>
        <button class="item__btn">Добавить корзину</button>
    </div> */

    create(){
        let wrapper = document.createElement('slot');

        const products = serviceStore.getProducts();

        this.containerCounter.innerText = products.length;
    
        for(let i = 0; i < this.productCatalog.length;i++) {
         
            const index = products.indexOf(this.productCatalog[i].id);
            let activeClass;
            let activeText;
            if(index == -1) {
                activeClass = '';
                activeText = 'Добавить в корзину';
            } else {
                activeClass = ' item__btn--active';
                activeText = 'Удалить из корзины';
            }

        
            const item = serviceCreateElement.getElement({tagName: 'div', className: 'item'});
            const name = serviceCreateElement.getElement({tagName: 'div', className: 'item__title', innerText: this.productCatalog[i].name});
            const image = serviceCreateElement.getElement({tagName: 'div', className: 'item__img', backgroundImage: `url(${this.productCatalog[i].img}`});
            const price = serviceCreateElement.getElement({tagName: 'div', className: 'item__price', innerText: this.productCatalog[i].price});
            const btn = serviceCreateElement.getElement({tagName: 'button', className: 'item__btn' + activeClass, innerText: activeText, id: this.productCatalog[i].id});

            btn.addEventListener('click', function() {
              const id = this.getAttribute('data-id');
              const result = serviceStore.putProduct(id);

              
              
              if(result.pushProduct) {
                  this.classList.add('item__btn--active');
                  this.innerText = 'Удалить из корзины';
              } else {
                this.classList.remove('item__btn--active');
                this.innerText = 'Добавить в корзину';
              }
              serviceProducts.containerCounter.innerText =  result.products.length;
              
            });
            
            item.appendChild(name);
            item.appendChild(image);
            item.appendChild(price);
            item.appendChild(btn); 
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

   

   

    actions(){

    }
}

const serviceProducts = new ServiceProducts('.container-products', '.container__counter', productCatalog);
