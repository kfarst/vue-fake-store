import { defineStore } from 'pinia'
import LineItem from  '@/models/LineItem.js'

export const shoppingCartStore = defineStore('shoppingCart', {
    state: () => ({ items: [] }),
    getters: {
        lineItems: (state) => state.items,
        itemsCount: (state) => state.items.reduce((count, item) => count + item.quantity, 0)
    },
    actions: {
        addItemToCart(product) {
            const productIndex = this.items.findIndex(item => item.product.id === product.id)

            if (productIndex > -1) {
                const item = this.items[productIndex]
                item.quantity += 1
                this.items[productIndex] = item
            } else {
                this.items.push(new LineItem(product, 1))
            }
        },
        deleteItemFromCart(product) {
            const productIndex = this.items.findIndex(item => item.product.id === product.id)

            if (productIndex < 0) return

            const item = this.items[productIndex]
            item.quantity -= 1

            if (item.quantity) {
                this.items[productIndex] = item
            } else {
                this.items.splice(productIndex, 1)
            }
        }
    }
})