
import React from "react";
import styled from 'styled-components'
import Login from '../Auth/components/Login'
// import ApplicationContext from '../applicationContext';


export default () => {

    return (
        <AppContainer>
            <span>Login</span>
            <Login/>
        </AppContainer>
    )
};

const AppContainer = styled.div`
    background:#4888ad;
    width:100%;
    display:flex;
    justify-content:center;
`

 
