// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class Catalog {
    constructor(id, name, price, img) {
        this.id_product = id;
        this.product_name = name;
        this.price = price;
        this.img = img;
    }
}

const app = new Vue({
    el: '.app',
    data: {
        userSearch: '',
        products: []
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
        getProducts() {
            let me = this;
            document.querySelectorAll('.BChoiseCard').forEach(function (el, id) {
                let name = el.querySelector('.BChoiseName').innerHTML;
                let regExp = new RegExp(/[\d\.]+/, 'g');
                let price = el.querySelector('.BChoisePrice').innerText.match(regExp)[0];
                let img = el.querySelector('.BChoiseIMG').getAttribute('src');
                me.products.push(new Catalog(id, name, price, img));
                el.setAttribute('data-id-product', id);
            })
            return this.products;
        },
    },
    mounted() {
        this.postJson('/api/products', this.getProducts());
    }
});
