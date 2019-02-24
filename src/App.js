
import "./App.css";
import React, { useReducer, useEffect} from "react";
import AuthedApplication from './components/AuthedApplication';
import GuestApplication from './components/GuestApplication';
import styled from 'styled-components'
import ApplicationContext from './context/ApplicationContext';
import {ApplicationReducer} from './reducers/ApplicationReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    token: undefined,
    user: undefined
};



export default () => {

    const [{token, user}, dispatch] = useReducer(ApplicationReducer,initialState);


    // check local storage for an existing token 
    // if present attempt to log the user in
    // on sucess update user in global state and on failure, remove the token forcing user to login manually
    

    



    useEffect(()=>{
        console.log("token updated",token);
    },[token])
 
    return (
        <ApplicationContext.Provider value={{user, dispatch}}>
            <AppWrapper>
                <ToastContainer/>
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

 
