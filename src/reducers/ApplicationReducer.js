import { toast } from 'react-toastify';

const ApplicationReducer = (state, action) =>{

    const errorToast = (message) =>{
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const successToast = (message) =>{
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    switch(action.type)
    {
        case 'login_success':{
            const {token, user} = action.payload;
            return { ...state, token, user};
        }
        case 'login_failure':{
            errorToast("Login failed - invalid credentials");
            return { ...state, token:undefined, user:undefined};
        }
            
        case 'logout':
            //TODO: clear the token and state 
        
           return [{...state,token:undefined, user:undefined}]
        
        default:
            return state;
    }
}

export {ApplicationReducer}

