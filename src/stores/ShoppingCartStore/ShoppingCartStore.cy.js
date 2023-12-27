import { shoppingCartStore } from '@/stores/ShoppingCartStore/ShoppingCartStore'
import Product from '@/models/Product'
import { setActivePinia, createPinia } from 'pinia'

let shoppingCart;
let product;

describe('ShoppingCartStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    shoppingCart = shoppingCartStore()
    product = new Product(1, 'Test Product', 15.5, 'Test description', 'https://picsum.photos/seed/picsum/300/350')
  })

  describe('.addItemToCart', () => {
    it('adds a product to the cart', () => {
        cy.wrap(shoppingCart.itemsCount).should('eql', 0)
        shoppingCart.addItemToCart(product)
        cy.wrap(shoppingCart.itemsCount).should('eql', 1)
    })

    it('increases the quantity when the same item is added to the cart', () => {
        shoppingCart.addItemToCart(product)
        cy.wrap(shoppingCart.lineItems[0].quantity).should('eql', 1)

        shoppingCart.addItemToCart(product)
        cy.wrap(shoppingCart.lineItems[0].quantity).should('eql', 2)
    })
  })

    describe('.deleteItemFromCart', () => {
        beforeEach(() => {
            shoppingCart.addItemToCart(product)
        })

        it('deletes a product from the cart', () => {
            cy.wrap(shoppingCart.itemsCount).should('eql', 1)
            shoppingCart.deleteItemFromCart(product)
            cy.wrap(shoppingCart.itemsCount).should('eql', 0)
        })

        it('deletes a product from the cart', () => {
            cy.wrap(shoppingCart.itemsCount).should('eql', 1)
            shoppingCart.deleteItemFromCart(product)
            cy.wrap(shoppingCart.itemsCount).should('eql', 0)
        })

        it('decreases the quantity when the same item is removed to the cart', () => {
            shoppingCart.addItemToCart(product)
            cy.wrap(shoppingCart.lineItems[0].quantity).should('eql', 2)

            shoppingCart.deleteItemFromCart(product)
            cy.wrap(shoppingCart.lineItems[0].quantity).should('eql', 1)
        })
    })
})