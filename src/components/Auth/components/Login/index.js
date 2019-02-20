import React, {useState, useContext} from "react";
import styled from 'styled-components'
import Card from '../../../Layout/elements/Card'
import ApplicationContext from '../../../../context/ApplicationContext'


export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {dispatch} = useContext(ApplicationContext);
   
    return (
        <Card style={{width:"35%", marginTop:150}}>
            Email <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
            Password <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
            <button onClick={()=>dispatch({type:'login', payload:{email,password}})} value="submit">Submit</button>
        </Card>        
    )

};


 
