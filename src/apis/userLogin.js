import api from './index';

const onUserLogin = async (data) => {
    return await api.post('/login', data)
};

export default onUserLogin;