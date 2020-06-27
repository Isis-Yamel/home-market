import api from './index';

const fetchGroups = async (data) => {
    return await api.get('/groups', {
        headers: {
            'token': data
        }
    })
};

export default fetchGroups;