
import React, {useState, useContext, useEffect} from "react";
import {showBoard} from './requests';
import ApplicationContext from '../../context/ApplicationContext'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "@reach/router";

export default (props) => {

    const {token} = useContext(ApplicationContext);
    const [board,setBoard] = useState({});
    const [loading,setLoading] = useState(false);
    const [boardLists, setBoardLists] = useState([]);
    const {id} = props;

    useEffect(()=>{
        fetchBoardByID(id)
    },[])


    const fetchBoardByID = async (id) => {    
        setLoading(true);
        let response = await showBoard(token, id);
        if (response !== undefined) {
            setBoard(response.data.data);
        }
        console.log(response);
        setLoading(false);
    };


    return (
        <div>
            <h3>{board.name}</h3>
            <div style={{width:'100%', display:'flex'}}>
            
                {
                    boardLists.map((list)=><div style={{padding:20, width:200, height:100, margin:10,textAlign:'center', border:'solid 1px grey', background:'lightgrey', cursor:'pointer', borderRadius:8}}>{list.name}</div>)
                }
                <div style={{padding:20, width:200, height:100, margin:10,textAlign:'center', background:'lightgrey', cursor:'pointer', borderRadius:8}}
                    onClick={()=>setBoardLists([...boardLists, {name:'test'}])}
                >Add List</div>
            </div>
        </div>
    )
};

 