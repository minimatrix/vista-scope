import React, {useState, useContext, useEffect} from "react";
import styled from 'styled-components'
import Card from '../../../Layout/elements/Card'
import ApplicationContext from '../../../../context/ApplicationContext'
import backgroundImg from '../../../../assets/images/loginbg.png';
import {authenticateUser, authenticateToken} from '../../requests';
import { Button } from 'reactstrap';
import useLocalStorage from '../../../../hooks/useLocalStorage';


export default () => {

    const {dispatch} = useContext(ApplicationContext);
    const [email, setEmail] = useState('');
    const [isManualLogin, setIsManualLogin] = useState(false);
    const [password, setPassword] = useState('');
    const [token,setToken,removeToken] = useLocalStorage('TOKEN','TOKEN');

    useEffect(()=>{
        loginWithToken(token)
    },[token])

   
    const onHandleSubmit = async () => {    
        setIsManualLogin(true);
        let response = await authenticateUser({email,password});
        if (response !== undefined) {
            setToken(response.data.token)
            dispatch({type:'login_success', payload:{token:response.data.token, user:response.data.user}});
        }
        else{
            removeToken("TOKEN");
            dispatch({type:'login_failure'});
        }
    };

    const loginWithToken = async () =>{
        if(token !== "TOKEN" && isManualLogin !== true){
            let response = await authenticateToken({token});
            if (response !== undefined) {
                dispatch({type:'login_success', payload:{token:response.data.token, user:response.data.user}});
            }
            else{
                removeToken("TOKEN");
            }
        }
    }

    return (
        <Container>
            <Cursive>Scope</Cursive>
            <Card 
                style={{width:"20%", minWidth:'300px', marginTop:150, position:'absolute', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                headerStyle={{paddginTop:'50px'}}
                heading="Login" useLogo={true}
            >
                Email <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
                Password <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
                
                <Button onClick={onHandleSubmit} value="submit">Submit</Button>
            
                <div style={{marginTop:'20px', fontSize:'0.8em', textAlign:'center'}}>
                    Don't have an account? register here<br/>
                    forgot your password?
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



 
