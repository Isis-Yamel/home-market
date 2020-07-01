import api from './index';

const fetchProducts = async (data) => {
    return await api.get('/products', {
        headers: {
            'token': data
        }
    })
};

export default fetchProducts;