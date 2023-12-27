import ProductCard from '@/components/ProductCard/ProductCard.vue'
import Product from '@/models/Product.js'
import { setActivePinia, createPinia } from 'pinia'

describe('<ProductCard />', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    cy.mount(ProductCard, {
      propsData: {
        product: new Product(1, 'Test Product', 15.5, 'Test description', 'https://picsum.photos/seed/picsum/300/350')
      }
    })
  })

  it('displays the correct product title', () => {
    cy.get('.card-title').should('contain.text', 'Test Product')
  })

  it('displays the correct product description', () => {
    cy.get('.product-description').should('contain.text', 'Test description')
  })

  it('displays the correct product price', () => {
    cy.get('.product-price').should('contain.text', '$15.50')
  })

  it('displays the correct button text', () => {
    cy.get('.add-to-cart-button').should('contain.text', 'Add to Cart')
  })
})