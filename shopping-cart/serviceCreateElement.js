//jshint esversion: 6

class ServiceCreateElement{
    getElement(options) {

        const element = document.createElement(options.tagName);

        if('className' in options) {element.setAttribute('class', options.className);}

        if('innerText' in options) {element.innerText = options.innerText;}

        if('backgroundImage' in options) {element.style.backgroundImage = options.backgroundImage;}

        if('id' in options) {element.setAttribute('data-id', options.id);}

        return element;
        
         /*  const item =  ocument.createElement( options.tagName)
          item.setAttribute('class', options.className)

          return item; */
    }
}

const serviceCreateElement = new ServiceCreateElement();