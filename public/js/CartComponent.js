// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('cart', {
    data() {
        return {
            cartUrl: '/getBasket.json',
            cartItems: [],
            imgCart: 'img/Layer_6.jpg',
            showCart: false
        }
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                let me = this;
                data.forEach(function (element) {
                    me.cartItems.push(element);
                });
                console.log(this.cartItems);
            })
    },
    methods: {
        addProduct(item) {
            console.log('yeah');
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++
                        }
                    })
            } else {
                item.visible = true;
                this.$parent.postJson(`/api/cart`, this.cartItems);
                // .then(data => {
                //     if (data.result === 1) {
                //         this.cartItems.push(prod)
                //     }
                // })
            }

            // this.$parent.getJson(`${API}/addToBasket.json`)
            //     .then(data => {
            //         if(data.result === 1){
            //             let find = this.cartItems.find(el => el.id_product === item.id_product);
            //             if(find){
            //                 find.quantity++;
            //             } else {
            //                 const prod = Object.assign({quantity: 1}, item);
            //                 this.cartItems.push(prod)
            //             }
            //         }
            //     })
        },
        remove(item) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
    },
    template: `<div>
<button class="btn-cart" type="button" @click="showCart = !showCart"><img src="img/basket.svg" alt="Basket"
class="basket"><div class='basketNum'>0</div></button>
        <div class="cart-block" v-show="showCart">
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item" @remove="remove">
            </cart-item>
            <div class='headLine-small'>TOTAL:</div>
            <div class="outcome outcome-name">SUM:<span class="outcome-quantity">$0.00</span></div>
            <div class="outcome outcome-name">quantity:<span class="outcome-quantity">0 items</span></div>
            <a href="checkout.html" class="checkout button">Checkout</a>
            <a href="shoppingCart.html" class="goToCard button">Go to cart</a>
        </div>
        </div>
    `
});

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
})