Vue.component('search', {
    template: `<form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="userSearch">
    <button type="submit" class="btn-search">
        <i class="fas fa-search"></i>
    </button>
</form>`,
    data() {
        return {
            userSearch: '',
        }
    },
    methods: {
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.$root.filtered = this.$root.filtered.filter(el => regexp.test(el.product_name));
        }
    }

})
