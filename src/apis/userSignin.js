import api from './index';

const onUserSignin = async (data) => {
    return await api.post('/users', data)
};

export default onUserSignin;