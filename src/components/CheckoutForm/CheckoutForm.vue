<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
            </b-col>
        </b-row>

        <b-form @submit.prevent="onSubmit($v)">
            <b-row>
                <b-col cols="4" class="text-left">
                    <b-form-group id="input-group-1" label="Email address" label-for="input-1">
                        <b-form-input id="input-1" v-model="$v.form.email.$model" :state="validateState('email', $v)" type="email" placeholder="Enter email"
                            aria-describedby="input-1-live-feedback"></b-form-input>
                        <b-form-invalid-feedback v-if="$v.form.email.required.$invalid" id="input-1-live-feedback">This is a required
                            field.</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="First Name" label-for="input-2">
                        <b-form-input id="input-2" v-model="$v.form.firstName.$model" :state="validateState('firstName', $v)" placeholder="Enter first name"
                            aria-describedby="input-2-live-feedback"></b-form-input>
                        <b-form-invalid-feedback  v-if="$v.form.firstName.required.$invalid" id="input-2-live-feedback">This is a required
                            field.</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Last Name" label-for="input-3">
                        <b-form-input id="input-3" v-model="$v.form.lastName.$model" :state="validateState('lastName', $v)" placeholder="Enter last name"
                            aria-describedby="input-3-live-feedback"></b-form-input>
                        <b-form-invalid-feedback v-if="$v.form.lastName.required.$invalid" id="input-3-live-feedback">This is a required
                            field.</b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col cols="4" class="text-left">
                    <b-form-group id="input-group-4" label="Street Address 1" label-for="input-4">
                        <b-form-input id="input-4" v-model="$v.form.street1.$model" :state="validateState('street1', $v)" placeholder="Enter street address 1"
                            aria-describedby="input-4-live-feedback"></b-form-input>
                        <b-form-invalid-feedback v-if="$v.form.street1.required.$invalid" id="input-4-live-feedback">This is a required
                            field.</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-5" label="Apartment or Unit" label-for="input-5">
                        <b-form-input id="input-5" v-model="$v.form.street2.$model" placeholder="Enter apartment or unit"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-6" label="City" label-for="input-6">
                        <b-form-input id="input-6" v-model="$v.form.city.$model" :state="validateState('city', $v)"  placeholder="Enter city"
                            aria-describedby="input-6-live-feedback"></b-form-input>
                        <b-form-invalid-feedback v-if="$v.form.city.required.$invalid" id="input-6-live-feedback">This is a required
                            field.</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-7" label="State" label-for="input-7">
                        <b-form-select id="input-7" v-model="$v.form.state.$model" :state="validateState('state', $v)" :options="states"
                            aria-describedby="input-7-live-feedback"></b-form-select>
                        <b-form-invalid-feedback v-if="$v.form.state.required.$invalid" id="input-7-live-feedback">This is a required
                            field.</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-8" label="Zip Code" label-for="input-8">
                        <b-form-input id="input-8" v-model="$v.form.zip.$model" :state="validateState('zip', $v)" placeholder="Enter zip"
                            aria-describedby="input-8-live-feedback"></b-form-input>
                        <b-form-invalid-feedback v-if="$v.form.zip.required.$invalid" id="input-8-live-feedback">This is a required
                            field.</b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="$v.form.zip.numeric.$invalid" id="input-8-live-feedback">Field must be numeric characters only.</b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col offset="1" cols="3">
                    <b-card>
                        <p class="h2">Total: {{ formatCurrency(cartTotal(shoppingCart.lineItems)) }} </p>
                        <template #footer>
                            <b-button type="submit" @click="$router.push('/checkout')" size="lg" variant="primary">Complete
                                Checkout</b-button>
                        </template>
                    </b-card>
                </b-col>
            </b-row>

        </b-form>
    </b-container>
</template>

<script>
import { required, numeric } from "@vuelidate/validators";

export default {
    name: 'CheckoutForm',
    validations() {
        return {
            form: {
                email: {
                    required
                },
                firstName: {
                    required
                },
                lastName: {
                    required
                },
                street1: {
                    required
                },
                street2: {
                },
                city: {
                    required
                },
                state: {
                    required
                },
                zip: {
                    required,
                    numeric
                }
            }
        }
    },
    data() {
        return {
            form: {
                email: '',
                firstName: '',
                lastName: '',
                street1: '',
                street2: '',
                city: '',
                state: '',
                zip: ''
            },
            states: [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
                'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
                'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
                'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
                'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ],
            breadcrumbs: [
                {
                    text: 'Products',
                    to: { name: 'home' }
                },
                {
                    text: 'Cart',
                    to: { name: 'cart' }
                },
                {
                    text: 'Checkout',
                    active: true
                }
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
        },
        validateState(name, $v) {
            const { $dirty, $error } = $v.form[name];
            return $dirty ? !$error : null;
        },
        async onSubmit($v) {
            $v.form.$touch();
            console.log(JSON.stringify($v.form))
            if ($v.form.$invalid) {
                return;
            }

            alert("Form submitted!");
        }
    }
}
</script>

<script setup>
import { shoppingCartStore } from '@/stores/ShoppingCartStore/ShoppingCartStore.js'
import { useVuelidate } from "@vuelidate/core";

const shoppingCart = shoppingCartStore()
const $v = useVuelidate()
</script>