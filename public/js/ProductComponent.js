Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
            imgProduct: 'https://placehold.it/200x150'
        }
    },
    mounted() {
        /*this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });*/
        this.$root.postJson('/api/products', this.getProducts())
            .then(data => {
                if (data.result === 1) {
                    console.log(data)
                }
                else console.log('shit')
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        getProducts() {
            let me = this;
            document.querySelectorAll('.BChoiseCard').forEach(function (el, id) {
                let name = el.querySelector('.BChoiseName').innerHTML;
                let regExp = new RegExp(/[\d\.]+/, 'g');
                let price = el.querySelector('.BChoisePrice').innerText.match(regExp)[0];
                me.products.push(new Catalog(id, name, price));
                return me.products;
            });
        }
    },
    template: `<div class="products">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="imgProduct"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct(event.target)"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <div class="product-item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}</p>
                    <button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `
})
document.querySelector('#product')