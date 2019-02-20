import React from "react";
import styled from 'styled-components'


export default (props) => {

    return (
        <Card style={props.style}>
            {props.children}
        </Card>
    )
};

const Card = styled.div`
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 300px;
    margin: 1rem;
    position: relative;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
`

 
