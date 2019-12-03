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
        for(let i = 0; i < this.productCatalog.length;i++) {
            const item = document.createElement('div');
            item.setAttribute('class', 'item');
            this.container.appendChild(item);

        }
    }

    actions(){

    }
}

const serviceProducts = new ServiceProducts('.container-products', productCatalog);