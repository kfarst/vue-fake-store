import axios from 'axios'

export default class FakeStoreAPI  {
    instance;

    constructor(baseURL = 'https://fakestoreapi.com') {
        this.instance = axios.create({ baseURL });
    }

    getProductsList() {
        return this.instance.get('/products')
    }
}