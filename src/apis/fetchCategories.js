import api from './index';

const fetchCategories = async (data) => {
    return await api.get('/categories', {
        headers: {
            'token': data
        }
    })
};

export default fetchCategories;