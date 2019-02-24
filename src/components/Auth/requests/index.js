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

export {
    authenticateUser
}