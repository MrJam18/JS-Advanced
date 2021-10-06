Vue.component('basket', {
    template: `<span>
        <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button><div class="cart-block" v-show="showCart">
        <p v-if="!$root.cartItems.length">Cart is empty</p>
        <div class="cart-item" v-for="item of cartItems" :key="item.id_product">
            <div class="product-bio">
                <img :src="imgCart" alt="Some img">
                <div class="product-desc">
                    <div class="product-title">{{ item.product_name }}</div>
                    <div class="product-quantity">Quantity: {{ item.quantity }}</div>
                    <div class="product-single-price">$ {{ item.price }} each</div>
                </div>
            </div>
            <div class="right-block">
                <div class="product-price">{{item.quantity*item.price}}</div>
                <button class="del-btn" @click="remove(item)">&times;</button>
            </div>
        </div>
    </div>
</span>`,
    props: ['cart-items'],
    data() {
        return {
            //cartItems: [],
            imgCart: 'https://via.placeholder.com/100x100',
            showCart: false,
            API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    methods: {
        addProduct(item) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                find.quantity++;
            } else {
                const prod = Object.assign({ quantity: 1 }, item);//создание нового объекта на основе двух, указанных в параметрах
                this.cartItems.push(prod)
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        }
    }
})
