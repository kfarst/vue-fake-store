<template>
        <div>
          <b-card
            :title="product.title"
            :img-src="product.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            img-height=300
            class="mb-2"
          >
            <b-card-text class="product-description">
              {{ product.description }}
            </b-card-text>

            <b-card-text class="product-price" style="font-weight: bold">
              {{ formatCurrency(product.price) }}
            </b-card-text>

            <b-button class="add-to-cart-button" @click="shoppingCart.addItemToCart(product)" variant="primary">Add to Cart</b-button>
          </b-card>
        </div>
</template>

<script>
import Product from '@/models/Product';

export default {
  methods: {
    formatCurrency(price) {
      const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      })

      return currencyFormatter.format(price)
    }
  },
  props: {
    product: {
      type: Product
    }
  }
}
</script>

<script setup>
import { shoppingCartStore } from '@/stores/ShoppingCartStore/ShoppingCartStore.js'

const shoppingCart = shoppingCartStore()
</script>