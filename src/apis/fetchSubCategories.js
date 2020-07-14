import api from './index';

const fetchCategories = async (data) => {
    return await api.get('/subcategories', {
        headers: {
            'token': data
        }
    })
};

export default fetchCategories;