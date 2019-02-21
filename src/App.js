
import "./App.css";
import React, { useReducer} from "react";
import AuthedApplication from './components/AuthedApplication';
import GuestApplication from './components/GuestApplication';
import styled from 'styled-components'
import ApplicationContext from './context/ApplicationContext';
import {ApplicationReducer} from './reducers/ApplicationReducer'

const initialState = {
    token: undefined,
    user: undefined
};

export default () => {
    const [{token, user}, dispatch] = useReducer(ApplicationReducer,initialState);
 
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

 
