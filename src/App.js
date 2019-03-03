
import "./App.css";
import React, { useReducer, useEffect} from "react";
import AuthedApplication from './components/AuthedApplication';
import GuestApplication from './components/GuestApplication';
import styled from 'styled-components'
import ApplicationContext from './context/ApplicationContext';
import {ApplicationReducer} from './reducers/ApplicationReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default () => {

    const initialState = {
        token: undefined,
        user: undefined
    };

    const [{token, user}, dispatch] = useReducer(ApplicationReducer,initialState);
 
    return (
        <ApplicationContext.Provider value={{user, token, dispatch}}>
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

 
