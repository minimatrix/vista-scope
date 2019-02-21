import React from "react";
import styled from 'styled-components'


export default (props) => {

    const {style, headerStyle, heading, children, useLogo} = props;

    return (
        <Card style={style}>
           
            {
                (heading !== undefined) &&
                    <CardHeader style={headerStyle}>
                  
                       <h3 style={{margin:'5px'}}>{heading}</h3>
                    </CardHeader>   
            }
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
};

const Card = styled.div`
    box-sizing:border-box;
    background: #fff;
    border-radius: 5px;
    margin: 1rem;
    
    padding-top:0px;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

const CardHeader = styled.div`
    text-align: center;
    padding: 10px;
    color:#fff;
    margin:0px;
    padding-bottom: 20px;
    border-bottom: solid 1px #e8e8e8;
    border-radius: 5px 5px 0px 0px;
    background:#ff4a6a;
`

const CardBody = styled.div`
    padding: 15px;
    margin:0px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-bottom: 20px;
`


 

 
