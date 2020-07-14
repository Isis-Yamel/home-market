import api from './index';

const fetchGroups = async (data) => {
    return await api.get('/categories', {
        headers: {
            'token': data
        }
    })
};

export default fetchGroups;