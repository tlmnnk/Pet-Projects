//jshint esversion: 6

class ServiceProducts {
    constructor(containerProduct, produtcsCatalog) {
        this.container = document.querySelector(containerProduct),
        this.productCatalog = produtcsCatalog,
        this.create();
    }

   /*  <div class="item">
        <div class="item__title">Cтул из дуба Halmar</div>
        <div class="item__img" style="background-image: url(img/halmar.jpg)"></div>
        <div class="item__price">1200</div>
        <button class="item__btn">Добавить корзину</button>
    </div> */

    create(){
        let wrapper = document.createElement('slot');
        
        for(let i = 0; i < this.productCatalog.length;i++) {
          /*   const item = document.createElement('div');
            item.setAttribute('class', 'item');
            wrapper.appendChild(item); */

            const item = this.getElement({tagName: 'div', className: 'item'});
            const name = this.getElement({tagName: 'div', className: 'item__title', innerText: this.productCatalog[i].name});
            const image = this.getElement({tagName: 'div', className: 'item__img', backgroundImage: `url(${this.productCatalog[i].img}`});
            const price = this.getElement({tagName: 'div', className: 'item__price', innerText: this.productCatalog[i].price});
            const btn = this.getElement({tagName: 'button', className: 'item__btn', innerText: 'Добавить в корзину'});
            
            item.appendChild(name);
            item.appendChild(image);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

    

    getElement(options) {

        const element = document.createElement(options.tagName);

        if('className' in options) {element.setAttribute('class', options.className);}

        if('innerText' in options) {element.innerText = options.innerText;}

        if('backgroundImage' in options) {element.style.backgroundImage = options.backgroundImage;}

        
        console.log(options);

        return element;
        
         /*  const item =  ocument.createElement( options.tagName)
          item.setAttribute('class', options.className)

          return item; */
    }

    actions(){

    }
}

const serviceProducts = new ServiceProducts('.container-products', productCatalog);