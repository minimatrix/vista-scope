
import React, {useState, useContext, useEffect} from "react";
import {showBoard} from './requests';
import ApplicationContext from '../../context/ApplicationContext'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "@reach/router";
import {DragDropContext} from "react-beautiful-dnd";
import Column from './components/Column'

export default (props) => {


    const initialColumnList = {
        'column-1':{id:1, title:'To Do', tasks:['task-1', 'task-2']},
        'column-2':{id:2, title:'Doing', tasks:['task-3','task-4']},
        'column-3':{id:3, title:'Done', tasks:[]},
    }

    const initialTasksList = {
        'task-1':{id:1, content:'Create account page'},
        'task-2':{id:2, content:'Implement Drag and Drop of Columns and Tasks'},
        'task-3':{id:3, content:'Create useLocalStorage hook'},
        'task-4':{id:4, content:'Add sortability of tasks/columns'}
    }

    const initialColumnOrder = ['column-1', 'column-2', 'column-3']

    const {token} = useContext(ApplicationContext);
    const [board,setBoard] = useState({});
    const [loading,setLoading] = useState(false);
    // const [boardLists, setBoardLists] = useState(initialBoardList);
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

    const onDragEnd = result =>{
        //TODO - redorder column
    }


    return (
        <div>
            <h3>{board.name}</h3>
            <div style={{width:'100%', display:'flex'}}>

                <DragDropContext
                    onDragEnd={onDragEnd}
                >
                    {
                        initialColumnOrder.map((columnId, index)=>
                        {
                            const column = initialColumnList[columnId];
                            const tasks = column.tasks.map((taskId,index) => initialTasksList[taskId]);
                            return (<Column column={column} tasks={tasks} index={index}/>)
                        })
                    }
                </DragDropContext>
                
            </div>
        </div>
    )
};

 