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
        this.$parent.getJson(`/api/cart`)
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
                this.$parent.putJson(`/api/cart/${find.id_product}`, {visible: true});
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