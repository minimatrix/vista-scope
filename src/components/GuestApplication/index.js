
import React from "react";
import styled from 'styled-components'
import Login from '../Auth/components/Login'
// import ApplicationContext from '../applicationContext';


export default () => {

    return (
        <AppContainer>
            <Login/>
        </AppContainer>
    )
};

const AppContainer = styled.div`
    background:#5db6ea;
    width:100%;
    display:flex;
    justify-content:center;
`

 
