
import "./App.css";
import React, { useReducer} from "react";
import AuthedApplication from './components/AuthedApplication';
import GuestApplication from './components/GuestApplication';
import styled from 'styled-components'
import ApplicationContext from './context/ApplicationContext';

const initialState = {
    token: undefined,
    user: undefined
};

const appReducer = (state, action) =>{

    switch(action.type)
    {
        case 'login':{
            console.log(action.payload)
            //TODO:  here you would call a hook to call the API to check the credentials

            //TODO: then call a hook to store the token 
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


export default () => {
    const [{token, user}, dispatch] = useReducer(appReducer,initialState);
 
    return (
        <ApplicationContext.Provider value={{user, dispatch}}>
            <AppWrapper>
            {
                user !== undefined ? (
                    <AuthedApplication/>
                ) : (
                    <GuestApplication/>
                )
            }
            </AppWrapper>
        </ApplicationContext.Provider>
    )
};

const AppWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

 
