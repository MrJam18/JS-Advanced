/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
let header = {
headerComp: Vue.component('headerComp', {
    template: `<header class="header">
    <div class="container">
        <div class= 'headerFlex'>
        <a href="index.html" class="brand">
            <img src="img/Group_2.svg" alt="Brand">
            <div class="logoText">
                BRAN<span class="D">D</span>
            </div>
        </a>
        <form class="browser">
            <details class="browse">
                <summary class="bigBrowseHeader">
                    <div class="textBrowse"><span class="B">B</span>rowse</div>
                    <div class="browseArrow"><i class="fas fa-sort-down"></i></div>
                </summary>
                <div class="browseMenu">
                    <h3 class="browseHeader">WOMEN</h3>
                    <div class="hrBrowseMenu"></div>
                    <a href="#" class="browseElement">Dresses</a>
                    <a href="#" class="browseElement">Tops</a>
                    <a href="#" class="browseElement">Sweaters/Knits</a>
                    <a href="#" class="browseElement">Jackets/Coats</a>
                    <a href="#" class="browseElement">Blazers</a>
                    <a href="#" class="browseElement">Denim</a>
                    <a href="#" class="browseElement">Leggings/Pants</a>
                    <a href="#" class="browseElement">Skirts/Shorts</a>
                    <a href="#" class="browseElement">Accessories</a>
                    <h3 class="browseHeader">MEN</h3>
                    <div class="hrBrowseMenu"></div>
                    <a href="#" class="browseElement">Tees/Tank tops</a>
                    <a href="#" class="browseElement">Shirts/Polos</a>
                    <a href="#" class="browseElement">Sweaters</a>
                    <a href="#" class="browseElement">Sweatshirts/Hoodies</a>
                    <a href="#" class="browseElement">Blazers</a>
                    <a href="#" class="browseElement">Jackets/vests</a>
                </div>
            </details>
            <filterComp></filterComp>
        </form>
        <div class="MyAccount">
            <cart ref='cart'></cart>
            <a href="checkout.html" class="buttonAccaunt button button_background">
                <div class="textAccount"><span class="myAccou">My Accou</span>nt </div>
                <div class="accountArrow"><i class="fas fa-sort-down"></i></div>
            </a>
        </div>
    </div>
</div>
<div class="justBorder">
        </div>
        <div class="container">
            <nav class="menu">
                <div class="menuLink">
                    HOME
                    <div class="megaMenu">
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder">
                                </div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <a href="product.html" class="megaAncor ancor">Blazers</a>
                            <a href="product.html" class="megaAncor ancor">Denim</a>
                            <a href="product.html" class="megaAncor ancor">Leggings/Pants</a>
                            <a href="product.html" class="megaAncor ancor">Skirts/Shorts</a>
                            <a href="product.html" class="megaAncor ancor">Accessories</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader lastMegaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <img src="img/megaIMG.jpg" alt="IMG" class="megaIMG">
                        </div>
                    </div>

                </div>
                <div class="menuLink">MAN
                    <div class="megaMenu">
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder">
                                </div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <a href="product.html" class="megaAncor ancor">Blazers</a>
                            <a href="product.html" class="megaAncor ancor">Denim</a>
                            <a href="product.html" class="megaAncor ancor">Leggings/Pants</a>
                            <a href="product.html" class="megaAncor ancor">Skirts/Shorts</a>
                            <a href="product.html" class="megaAncor ancor">Accessories</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader lastMegaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <img src="img/megaIMG.jpg" alt="IMG" class="megaIMG">
                        </div>
                    </div>
                </div>
                <div class="menuLink">WOMEN
                    <div class="megaMenu">
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder">
                                </div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <a href="product.html" class="megaAncor ancor">Blazers</a>
                            <a href="product.html" class="megaAncor ancor">Denim</a>
                            <a href="product.html" class="megaAncor ancor">Leggings/Pants</a>
                            <a href="product.html" class="megaAncor ancor">Skirts/Shorts</a>
                            <a href="product.html" class="megaAncor ancor">Accessories</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader lastMegaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <img src="img/megaIMG.jpg" alt="IMG" class="megaIMG">
                        </div>
                    </div>
                </div>
                <div class="menuLink">KIDS
                    <div class="megaMenu">
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder">
                                </div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <a href="product.html" class="megaAncor ancor">Blazers</a>
                            <a href="product.html" class="megaAncor ancor">Denim</a>
                            <a href="product.html" class="megaAncor ancor">Leggings/Pants</a>
                            <a href="product.html" class="megaAncor ancor">Skirts/Shorts</a>
                            <a href="product.html" class="megaAncor ancor">Accessories</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader lastMegaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <img src="img/megaIMG.jpg" alt="IMG" class="megaIMG">
                        </div>
                    </div>
                </div>
                <div class="menuLink">ACCOSERIESE
                    <div class="megaMenu">
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder">
                                </div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <a href="product.html" class="megaAncor ancor">Blazers</a>
                            <a href="product.html" class="megaAncor ancor">Denim</a>
                            <a href="product.html" class="megaAncor ancor">Leggings/Pants</a>
                            <a href="product.html" class="megaAncor ancor">Skirts/Shorts</a>
                            <a href="product.html" class="megaAncor ancor">Accessories</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader lastMegaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <img src="img/megaIMG.jpg" alt="IMG" class="megaIMG">
                        </div>
                    </div>
                </div>
                <div class="menuLink">FEATURED
                    <div class="megaMenu lastMegaMenu lastMegaMenu_featured">
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder">
                                </div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <a href="product.html" class="megaAncor ancor">Blazers</a>
                            <a href="product.html" class="megaAncor ancor">Denim</a>
                            <a href="product.html" class="megaAncor ancor">Leggings/Pants</a>
                            <a href="product.html" class="megaAncor ancor">Skirts/Shorts</a>
                            <a href="product.html" class="megaAncor ancor">Accessories</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader lastMegaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <img src="img/megaIMG.jpg" alt="IMG" class="megaIMG">
                        </div>
                    </div>
                </div>
                <div class="menuLink">HOT DEALS
                    <div class="megaMenu lastMegaMenu">
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder">
                                </div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <a href="product.html" class="megaAncor ancor">Blazers</a>
                            <a href="product.html" class="megaAncor ancor">Denim</a>
                            <a href="product.html" class="megaAncor ancor">Leggings/Pants</a>
                            <a href="product.html" class="megaAncor ancor">Skirts/Shorts</a>
                            <a href="product.html" class="megaAncor ancor">Accessories</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <div class="megaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                        </div>
                        <div class="megaElement">
                            <div class="megaHeader lastMegaHeader">WOMEN
                                <div class="megaBorder"></div>
                            </div>
                            <a href="product.html" class="megaAncor ancor">Dresses</a>
                            <a href="product.html" class="megaAncor ancor">Tops</a>
                            <a href="product.html" class="megaAncor ancor">Sweaters/Knits</a>
                            <a href="product.html" class="megaAncor ancor">Jackets/Coats</a>
                            <img src="img/megaIMG.jpg" alt="IMG" class="megaIMG">
                        </div>
                    </div>
                </div>
            </nav>
        </div>
</header>`
}),
cart: 
Vue.component('cart', {
    data() {
        return {
            cartUrl: '/getBasket.json',
            cartItems: [],
            imgCart: 'img/Layer_6.jpg',
            showCart: false,
            sum: 0,
            totalQuantity: 0
        }
    },
    mounted() {
        this.$root.getJson(`/api/cart`)
            .then(data => {
                let me = this;
                data.forEach(function (element) {
                    me.cartItems.push(element);
                });
                console.log(this.cartItems);
            }),
            this.$root.getJson('/api/cart/total')
                    .then(data => {
                        this.sum = +data.sum;
                        this.totalQuantity = +data.quantity;
                    })
    },
    methods: {
        addProduct() {
            let currentId = parseInt(event.currentTarget.parentNode.parentNode.getAttribute('data-id-product'));
            let find = this.cartItems.find(el => el.id_product === currentId);
            console.log(find);
            if (find.visible == true) {

                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                      .then(data => {
                          if(data.result === 1){
                              //console.log(data);
                              find.quantity++;
                          }
                      })
            } else {
                find.visible = true;
                this.$root.putJson(`/api/cart/${find.id_product}`, {visible: true});
            }
            this.sum += +find.price;
            this.totalQuantity++;

        },
        remove(item) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: -1})
                      .then(data => {
                          if(data.result === 1){
                              if (find.quantity > 1) find.quantity--;
                              else find.visible = false;
                          }
                        })
            this.sum -= find.price;
            this.totalQuantity--;
        },
    },
    template: `<div>
<button class="btn-cart" type="button" @click="showCart = !showCart"><img src="img/basket.svg" alt="Basket"
class="basket"><div class='basketNum'>{{totalQuantity}}</div></button>
        <div class="cart-block" v-show="showCart">
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item" @remove="remove">
            </cart-item>
            <div class='headLine-small'>TOTAL:</div>
            <div class="outcome outcome-name">SUM:<span class="outcome-quantity">{{sum}}$</span></div>
            <div class="outcome outcome-name">quantity:<span class="outcome-quantity">{{totalQuantity}} items</span></div>
            <a href="checkout.html" class="checkout button">Checkout</a>
            <a href="shoppingCart.html" class="goToCard button">Go to cart</a>
        </div>
        </div>
    `
}),
cartItem:
Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <div class="cart-item" v-show= 'cartItem.visible'>
        <div>
            <div class="product-bio productCard">
                <img :src="cartItem.img" alt="Some img" class="accountIMG">
                <div class="product-desc accountProductText">
                    <div class="product-title accountPTextBlock">{{ cartItem.product_name }}</div>
                    <div class="product-quantity accountPTextBlock">Quantity: {{ cartItem.quantity }}</div>
                    <div class="product-single-price accountPTextBlock accountPrice">$ {{ cartItem.price }} each</div>
                </div>
                <i class="fas fa-times-circle but" @click="$emit('remove', cartItem)"></i>
            </div>
            <div class="accountHR"></div>
        </div>
    </div>
    `
}),
filterComp:
Vue.component('filterComp', {
    data() {
        return {
            userSearch: '',
        }
    },
    methods: {
        filterProducts() {
            let regexp = new RegExp(this.userSearch, 'i');
            console.log(this.$root.products.filter(el => regexp.test(el.product_name)));
            this.$root.filtered = this.$root.products.filter(el => regexp.test(el.product_name));
            if (this.$root.filtered.length != this.$root.products.length) {
                this.$root.filteredInvisible = false;
                this.$root.searchContent = true;
            }
            else {
                this.$root.filteredInvisible = true;
                this.$root.searchContent = false;
            }
        }
    },
    template: `
    <form class="searchComp" @submit.prevent="filterProducts">
    <input type="search" placeholder="Search for item.." class="searchType" v-model="userSearch">
            <button type="submit" class="submit"> <i class="fas fa-search browseIMG"></i></button>
    </form>`
    })
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
let footer = {footerComp:
Vue.component('footerComp', {
    template: `<footer class="footer">
    <div class="container">
    <div class="footerTop">
        <div class="footerBlock footerInfo">
            <div class="footerBrand">
                <a href="index.html" class="brand">
                    <img src="img/Group_2.svg" alt="Brand">
                    <div class="logoText">
                        BRAN<span class="D">D</span>
                    </div>
                </a>
            </div>
            <div class="footerText">
                Objectively transition extensive data rather than cross functional solutions. Monotonectally
                syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an
                expanded
                array of processes and cross-unit partnerships. <br><br>

                Efficiently plagiarize 24/365 action items and focused infomediaries.
                Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
            </div>
        </div>
        <div class="footerBlock footerBlockCompany">
            <div class="footerHeader">COMPANY</div>
            <a href="#" class="footerAncor ancor">
                Home
            </a>
            <a href="" class="footerAncor ancor">
                Shop
            </a><a href="" class="footerAncor ancor">
                About
            </a><a href="" class="footerAncor ancor">
                How it works
            </a>
            <a href="" class="footerAncor ancor">
                Contact
            </a>
        </div>
        <div class="footerBlock footerBlockInformation">
            <div class="footerHeader">INFORMATION</div>
            <a href="#" class="footerAncor ancor">
                Terms & Condition
            </a>
            <a href="" class="footerAncor ancor">
                Privacy Policy
            </a>
            <a href="" class="footerAncor ancor">
                How to Buy
            </a><a href="" class="footerAncor ancor">
                How to Sell
            </a>
            <a href="" class="footerAncor ancor">
                Promotion
            </a>
        </div>
        <div class="footerBlock footerBlockShopCategory">
            <div class="footerHeader">SHOP CATEGORY</div>
            <a href="#" class="footerAncor ancor">
                Men
            </a><a href="" class="footerAncor ancor">
                Women
            </a>
            <a href="" class="footerAncor ancor">
                Child
            </a><a href="" class="footerAncor ancor">
                Apparel
            </a>
            <a href="" class="footerAncor ancor">
                Browse All
            </a>
        </div>
    </div>
</div>
<div class="footerBottom">
    <div class="container bottomFlex">
        <div class="leftBlock">
            <span class="c">© 2017</span> Brand All Rights Reserved.
        </div>
        <div class="rightBlock">
            <a href="#" class="bottomAncor ancor"><i class="fab fa-facebook-f ancor"></i></a>
            <a href="#" class="bottomAncor ancor"><i class="fab fa-twitter ancor"></i></a>
            <a href="#" class="bottomAncor ancor"><i class="fab fa-linkedin-in ancor"></i></a>
            <a href="#" class="bottomAncor ancor"><i class="fab fa-pinterest-p ancor"></i></a>
            <a href="#" class="bottomAncor ancor"><i class="fab fa-google-plus-g ancor"></i></a>
        </div>
    </div>
</div>
</footer>` })
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "products": () => (/* binding */ products)
/* harmony export */ });
    let products = {products: Vue.component('products', {
    data() {
        return {
            productsforProduct: [],
        }
    },
    methods: {
        divideProducts(products){
            console.log(products)
            this.productsforProduct = this.$root.products.slice(8)
            console.log(this.products)
        }

    },
    template: `<div class="imgFlexBox">
    <a href="singlePage.html" class="imgBlock BChoiseCard BChoiseCard-product" v-for= 'product of productsforProduct' :data-id-product = 'product.id_product'>
    <object data="" type="">
        <a href="#" class="BCAdd"@click.prevent= '$root.$refs.header.$refs.cart.addProduct()'>
            <img src="img/Basket2.svg" alt="basket">
            <div class="BCAddText">Add to Cart</div>
        </a>
    </object>
    <div class="imgBackground1 imgBackground"><img :src="product.img" alt="productIMG"
            class="productIMG BChoiseIMG BChoiseIMG">
    </div>
    <div class="BChoiseName">{{product.product_name}}</div>
    <div class="BChoisePrice">$\{{product.price}}</div>
</a>
</div>`
})
    }
     

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '.app',
    data: {
        userSearch: '',
        products: [],
        filtered: [],
        filteredInvisible: true,
        searchContent: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
    },
    mounted() {
        this.getJson('/api/products')
            .then(result => {
                this.products = result;
                if(document.URL.includes("product")) {
                this.$refs.products.divideProducts(this.products)}
            });
    }
});