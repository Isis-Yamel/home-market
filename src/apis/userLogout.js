import api from './index';

const onUserLogout = async () => {
    return await api.post('/login', {
        headers: {
            'token': null
        }
    })
};

export default onUserLogout;