<template>
  <b-container fluid>
    <div v-for="(group, index) in products" :key="index">
      <b-row cols="6">
        <div v-for="product in group" :key="product.id">
          <b-col>
            <div v-if="loading">
              <LoadingCard />
            </div>
            <div v-if="!loading">
              <ProductCard v-bind:key="product.id" v-bind:product="product" />
            </div>
          </b-col>
        </div>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import LoadingCard from '@/components/LoadingCard/LoadingCard.vue'
import ProductCard from '@/components/ProductCard/ProductCard.vue'
import Product from '@/models/Product.js'
import FakeStoreAPI from '@/networking/FakeStoreAPI.js'

const api = new FakeStoreAPI()

export default {
  name: 'ProductsList',
  data() {
    return {
      loading: true,
      error: null,
      products: Array.from(Array(30).keys()).map(id => new Product(id)).reduce((all, one, i) => {
        const ch = Math.floor(i / 6);
        all[ch] = [].concat((all[ch] || []), one);
        return all
      }, [])
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      api.getProductsList()
        .then(response => {
          this.products = response
          .data
          .map(product => new Product(product.id, product.title, product.price, product.description, product.image))
          .reduce((all, one, i) => {
            const ch = Math.floor(i / 6);
            all[ch] = [].concat((all[ch] || []), one);
            return all
          }, [])
        })
      .catch(error => this.error = error)
      .finally(() => this.loading = false)
    }
  },
  components: {
    LoadingCard,
    ProductCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
