<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
            </b-col>
        </b-row>


        <b-row v-if="!shoppingCart.lineItems.length"  style="padding-top: 2rem; height: 5rem">
            <b-col cols="12">
                <b-icon scale="5" icon="cart-x"></b-icon>
            </b-col>
        </b-row>

        <b-row v-if="!shoppingCart.lineItems.length" style="padding-top: 2rem">
            <b-col cols="12">
                <p class="h1">Your cart is currently empty</p>
            </b-col>
        </b-row>

        <b-row v-if="shoppingCart.lineItems.length">
            <b-col cols="9">
                <b-table striped :fields="fields" :items="shoppingCart.lineItems">
                    <template #cell(image)="data">
                        <b-img :src="data.item.product.image" style="width: 5rem; height: 5rem" fluid
                            alt="Product image"></b-img>
                    </template>

                    <template #cell(name)="data">
                        {{ data.item.product.title }}
                    </template>

                    <template #cell(price)="data">
                        {{ formatCurrency(data.item.product.price) }}
                    </template>

                    <template #cell(quantity)="data">
                        {{ data.item.quantity }}
                    </template>

                    <template #cell(subtotal)="data">
                        {{ formatCurrency(data.item.quantity * data.item.product.price) }}
                    </template>

                    <template #cell(delete)="data">
                        <b-button size="md" variant="danger"
                            @click="shoppingCart.deleteItemFromCart(data.item.product)">Delete</b-button>
                    </template>
                </b-table>
            </b-col>

            <b-col cols="3">
                <b-card>
                    <p class="h2">Total: {{ formatCurrency(cartTotal(shoppingCart.lineItems)) }} </p>
                    <template #footer>
                        <b-button @click="$router.push('/checkout')" size="lg" variant="primary">Proceed to Checkout</b-button>
                    </template>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'ShoppingCart',
    data() {
        return {
            breadcrumbs: [
                {
                    text: 'Products',
                    to: { name: 'home' }
                },
                {
                    text: 'Cart',
                    active: true
                }
            ],
            fields: [
                { key: 'image', label: '', tdClass: 'align-middle' },
                { key: 'name', label: 'Product', tdClass: 'align-middle' },
                { key: 'price', tdClass: 'align-middle' },
                { key: 'quantity', tdClass: 'align-middle' },
                { key: 'subtotal', tdClass: 'align-middle' },
                { key: 'delete', label: '', tdClass: 'align-middle' }
            ]
        }
    },
    methods: {
        formatCurrency(price) {
            const currencyFormatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            })

            return currencyFormatter.format(price)
        },
        cartTotal(lineItems) {
            return lineItems.reduce((total, item) => total + (item.quantity * item.product.price), 0)
        }
    }
}
</script>

<script setup>
import { shoppingCartStore } from '@/stores/ShoppingCartStore/ShoppingCartStore.js'

const shoppingCart = shoppingCartStore()
</script>