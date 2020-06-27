import api from './index';

const fetchGroups = async (data) => {
    return await api.get('/groups', data)
};

export default fetchGroups;