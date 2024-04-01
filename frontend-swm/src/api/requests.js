import axios from 'axios';

axios.defaults.withCredentials = true

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
    validateStatus: function (status) {
        return status >= 200 && status <= 302
    }
})

const allProductsData = async () => await backend.get('products')

// async function allProductsData() {
//     return await backend.get('products');
// }

export default {
    allProductsData
};