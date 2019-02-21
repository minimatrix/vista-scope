import useLocalStorage from '../hooks/useLocalStorage';

const ApplicationReducer = (state, action) =>{

    // const { token, setToken, removeToken } = useLocalStorage("application_token", null);

    switch(action.type)
    {
        case 'login':{
            // setToken("token");
            // console.log(token);
            return { ...state, token:Date.now(), user:'test user'};
        }

        case 'loginWithToken':{
            //TODO: here you would call a hook to call API for attempting auth with token

        }
            
        case 'logout':

            //TODO: clear the token and state 
           return [{...state}]
        
        default:
            return state;
    }
}

export {ApplicationReducer}

