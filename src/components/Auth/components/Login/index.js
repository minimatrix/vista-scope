import React, {useState, useContext} from "react";
import styled from 'styled-components'
import Card from '../../../Layout/elements/Card'
import ApplicationContext from '../../../../context/ApplicationContext'
import backgroundImg from '../../../../assets/images/loginbg.png';
import {authenticateUser} from '../../requests';
import { Button } from 'reactstrap';


export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {dispatch} = useContext(ApplicationContext);

    const onHandleSubmit = async () => {    
        let response = await authenticateUser({email,password});
        if (response !== undefined) {
            dispatch({type:'login_success', payload:{token:response.data.token, user:response.data.user}});
        }
        else{
            dispatch({type:'login_failure'});
        }
    };

   
    return (
        <Container>
            <Cursive>Scope</Cursive>
            <Card 
                style={{width:"20%", marginTop:150, position:'absolute', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                headerStyle={{paddginTop:'50px'}}
                heading="Login" useLogo={true}
            >
                Email <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
                Password <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
                
                <Button onClick={onHandleSubmit} value="submit">Submit</Button>
            
                <div style={{marginTop:'20px', textAlign:'center'}}>
                    Don't have an account? register here<br/>
                    forgot you password?
                </div>
             
            </Card>    
        </Container>    
    )

};

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    /* background-image: url(${backgroundImg}); */
    justify-content:center;
`;

const Cursive = styled.h1`
margin-top:50px;
font-size:3em;
    color:#fff;
    font-family: 'Pacifico', cursive;    
`;



 
