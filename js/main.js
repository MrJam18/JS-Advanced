const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render();
                this.initBasket();
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
    initBasket() {
        let basket = new Basket;
        let buyBoxes = document.querySelectorAll('.buy-btn');
        buyBoxes.forEach(function (el) {
            el.addEventListener('click', function (ev) {
                basket.init(ev.currentTarget.parentNode.parentNode);
            });
        });
    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
class Basket {
    constructor() {
        this.basketInsert = document.querySelector('.menuAccount');
        this.sum = 0;
        this.sumEl = this.basketInsert.querySelector('.sum');
        this.basketArrayId = [];
    }
    changeGoodsNum(id) {
        this.findElementById(id);
        this.elInArr.goodsNum++;
        this.writeElement.querySelector('.accountPrice').innerHTML = `${this.elInArr.goodsNum} x $${this.elInArr.price}`;
        this.sum = this.sum + this.elInArr.price;
        this.sumEl.innerHTML = '$' + this.sum;
    }
    findElemInBasketArrayId(id) {
        for (let i = 0; i < this.basketArrayId.length; i++) {
            if (id == this.basketArrayId[i]) {
                return true;
            }
        }
        return false;
    }
    findElementById(id) {
        for (let i = 0; i < list.goods.length; i++) {
            if (id == list.goods[i].id_product) {
                this.writeElement = this.basketInsert.querySelector(`.productCard[data-id='${list.goods[i].id_product}']`);
                this.elInArr = list.goods[i];
            }
        }
    }

    addGoods(id) {
        this.findElementById(id);
        this.elInArr.goodsNum = 1;
        this.newBasketEl = document.createElement('div');
        this.newBasketEl.classList.add('basketBox');
        this.newBasketEl.innerHTML = `<div class="productCard"  data-id='${this.elInArr.id_product}'> 
        <img src="https://via.placeholder.com/200x150" alt="productCard" class="accountIMG">
        <div class="accountProductText">
            <div class="accountPTextBlock">${this.elInArr.product_name}</div>
            <div class="accountPTextBlock accountPrice">1 x $${this.elInArr.price}</div>
        </div>
        <i class="fas fa-times-circle"></i>
    </div>
    <div class="accountHR"></div>`;
        this.basketInsert.insertAdjacentElement('afterbegin', this.newBasketEl);
        // this.newBasketEl.insertAdjacentHTML("afterend", '<div class="accountHR"></div>');
        /*this.basketInsert.insertAdjacentHTML('afterbegin', `<div class="productCard"  data-id='${this.elInArr.id_product}'> 
                                                        <img src="https://via.placeholder.com/200x150" alt="productCard" class="accountIMG">
                                                        <div class="accountProductText">
                                                            <div class="accountPTextBlock">${this.elInArr.product_name}</div>
                                                            <div class="accountPTextBlock accountPrice">1 x $${this.elInArr.price}</div>
                                                        </div>
                                                        <i class="fas fa-times-circle"></i>
                                                    </div>
                                                    <div class="accountHR"></div>`);*/
        this.sum = this.sum + this.elInArr.price;
        this.sumEl.innerHTML = '$' + this.sum;
        this.basketArrayId.push(this.elInArr.id_product);
        this.newBasketEl.querySelector('.fa-times-circle').addEventListener('click', this.removeGoods.bind(this));
    }
    removeGoods(ev) {
        let id = ev.target.parentNode.getAttribute('data-id');
        ev.target.parentNode.parentNode.remove();
        this.findElementById(id);
        let index = this.basketArrayId.indexOf(this.elInArr.id_product);
        this.basketArrayId.splice(index, 1);
        this.sum -= this.elInArr.price * this.elInArr.goodsNum;
        this.sumEl.innerHTML = '$' + this.sum;

    }
    init(ev) {
        if (this.findElemInBasketArrayId(+(ev.getAttribute('data-id')))) {
            this.changeGoodsNum(+(ev.getAttribute('data-id')));
        }
        else {

            this.addGoods(+(ev.getAttribute('data-id')));
        }

    }
}
