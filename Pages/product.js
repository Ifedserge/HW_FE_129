import { getItem } from "../components/App.js";

export default function itemPage(id){
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('container');

    (async () => {
        let product = await getItem(id);
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="img">
                <img src="${product.image}" alt="#"}/>
            </div>
            <div class="description">
                <p class="raiting">${product.rating.rate}</p>
                <h2>${product.title}</h2>
                <p class="price">${product.price}</p>
            </div>
        `;
        itemContainer.append(container);
    })();

    return itemContainer;
}

// class Product{
    
//     constructor(id){
//         this.id = getItem(id);
//         this.product = JSON.parse(localStorage.getItem(id))
//         this.main = document.querySelector('.main');
//         this.init = this.init.bind(this);
//     };
    
//     create(){
        
//         let container = document.createElement('div');
//         container.classList.add('container')
//         this.main.append(container);
//         console.log(localStorage);

//         // const content = document.createElement('div');
//         // content.innerHTML = `
//         //     <div class="img">
//         //         <img src="${product.image}" alt="#"}/>
//         //     </div>
//         //     <div class="description">
//         //         <p class="raiting">${product.rating.rate}</p>
//         //         <h2>${product.title}</h2>
//         //         <p class="price">${product.price}</p>
//         //     </div>
//         // `;
//         // container.append(content);
//     }
//     init(){
//         this.create()

//     };
// }
// const id = window.location.href.replace(/.*\//, '');
// // const id = window.location.search.substring(1);
// console.log(id);
// const product = new Product(id);
// product.create();

// // let product = new Product()
// const creatProduct = product.init;
// export default creatProduct;


// class Product {
//     constructor(id, title, price) {
//       this.id = id;
//     //   this.title = title;
//     //   this.price = price;
//     }
  
//     render() {
//       // получаем элемент, в котором будет отображаться товар
//       const productElement = document.getElementById('product');
  
//       // создаем HTML-разметку товара
//       const productHtml = `
//         <div class="product">
//           <h2>${this.title}</h2>
//           <p>Цена: ${this.price} руб.</p>
//         </div>
//       `;
  
//       // добавляем разметку на страницу
//       productElement.innerHTML = productHtml;
//     }
//   }
  
//   // получаем id товара из URL
//   const id = window.location.href.replace(/.*\//, '');
//   console.log(id);
  
//   // получаем информацию о товаре из localStorage
//   const products = JSON.parse(localStorage.getItem('products'));
//   const productInfo = products.find(product => product.id === id);
//   console.log(productInfo);
//   console.log(products);
  
//   // создаем экземпляр класса Product и отображаем товар на странице
//   const product = new Product(productInfo.id);
//   product.render();