import axios from 'axios';
import handleErrors from '../../../handleErrors';

const authenticateUser = (data) => {
    return axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}/auth/verify`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data
    }).catch(handleErrors);
}

const authenticateToken = (data) => {

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_API + '/auth/verify/token',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.token,
        },
        data: {
            'token': data.token,
        }
    }).catch(handleErrors);
}

export {
    authenticateUser,
    authenticateToken
}