import axios from 'axios';
import handleErrors from '../../../handleErrors';

const fetchBoards = (token, data) => {
    return axios({
        method: "GET",
        url: `${process.env.REACT_APP_API}/boards`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data
    }).catch(handleErrors);
}

const createBoard = (token, data) => {

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_API + '/boards',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data:{name:'test'}
    }).catch(handleErrors);
}



const showBoard = (token, board_id) => {
    return axios({
        method: 'GET',
        url: process.env.REACT_APP_API + '/boards/' + board_id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    }).catch(handleErrors);
}

export {
    fetchBoards,
    showBoard,
    createBoard,
}