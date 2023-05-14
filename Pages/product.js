import { getItem } from "../components/App.js";
import { addCart } from "./cart.js";
import { addButton } from "../components/button.js";

export default function itemPage(id){
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('container');

    (async () => {
        let product = await getItem(id);
        const container = document.createElement('div');
        container.classList.add('product__wraper')
        container.innerHTML = `
            <div class="product__wraper-img">
                <img src="${product.image}" alt="#"}/>
            </div>
            <div class="product__wraper-description">
                
                <h2>${product.title}</h2>
                <p class="raiting">${product.rating.rate}</p>
                <p class="price">${product.price}</p>
                <p class="description">${product.description}</p>
            </div>
        `;
        container.append(addButton(product, 'add'))
        itemContainer.append(container);
    
    })();

    
    return itemContainer;
}
