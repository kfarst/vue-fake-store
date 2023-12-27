<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">FakeStore</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/')">Products</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button  @click="$router.push('/cart')" size="md" style="padding-left: 2rem; padding-right: 2rem" class="my-2 my-sm-0">
            Cart
            <b-badge pill variant="warning">{{ shoppingCart.itemsCount }}</b-badge>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<script setup>
import { shoppingCartStore } from '@/stores/ShoppingCartStore/ShoppingCartStore.js'

const shoppingCart = shoppingCartStore()
</script>

<style scoped>
nav {
  margin-bottom: 40px;
}
</style>