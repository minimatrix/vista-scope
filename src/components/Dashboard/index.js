
import React, {useState, useContext, useEffect} from "react";
import {fetchBoards, createBoard} from './requests';
import ApplicationContext from '../../context/ApplicationContext'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "@reach/router";


export default () => {

    const [boards, setBoards] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const {token} = useContext(ApplicationContext);
    const [loading,setLoading] = useState(false);
    
    const toggleModal = (modalOpen) => {
        setModalOpen(!modalOpen);
    }

    useEffect(()=>{
        fetchUserBoards(token)
    },[])


    const fetchUserBoards = async () => {    
        setLoading(true);
        let response = await fetchBoards(token);
        console.log("response", response)
        if (response !== undefined) {
            setBoards(...boards,response.data.data);
        }
        setLoading(false);
    };

    const onHandleCreateBoard = async () => {    
        let response = await createBoard(token);
        if (response !== undefined) {
            setBoards(...boards,response.data.data.board)
            fetchUserBoards(token);
        }
    };

    return (
        <div>
            <h3>Boards</h3>
            <div style={{display:'flex', flexWrap:'wrap', width:'900px'}}>
                {
                    boards.map(board =>
                        <Link to={`/boards/${board.id}`}>
                            <div style={{padding:20, width:200, height:100, margin:10, textAlign:'center', background:'#044F67', color:'white', borderRadius:8}}>{board.name}</div>
                        </Link>
                    )
                }
                <div style={{padding:20, width:200, height:100, margin:10,textAlign:'center', background:'lightgrey', cursor:'pointer', borderRadius:8}}
                    onClick={()=>setModalOpen(true)}
                >Add Board</div>
            </div>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Create New Board</ModalHeader>
                <ModalBody>
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onHandleCreateBoard}>Create Board</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
};

 