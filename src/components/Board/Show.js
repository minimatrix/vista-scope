
import React, {useState, useContext, useEffect} from "react";
import {showBoard} from './requests';
import ApplicationContext from '../../context/ApplicationContext'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "@reach/router";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import Column from './components/Column';
import styled from 'styled-components';

export default (props) => {


    const [columnsList, setColumnsList] = useState({
        'column-1':{id:'column-1', title:'To Do', tasks:['task-1', 'task-2']},
        'column-2':{id:'column-2', title:'Doing', tasks:['task-3','task-4']},
        'column-3':{id:'column-3', title:'Done', tasks:[]},
    });

    const [tasksList, setTasksList] = useState({
        'task-1':{id:'task-1', content:'Create account page'},
        'task-2':{id:'task-2', content:'Implement Drag and Drop of Columns and Tasks'},
        'task-3':{id:'task-3', content:'Create useLocalStorage hook'},
        'task-4':{id:'task-4', content:'Add sortability of tasks/columns'}
    });

    const [columnOrder,setColumnOrder] = useState(['column-1', 'column-2', 'column-3']);

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
        console.log("ONDRAGEND",result)

        const {destination, source, draggableId, type} = result;
        // if  task not dropped in droppable area then ignore
        if(!destination)
        {
            return;
        }

        //check if the location of the task was dropped back in its original position - if so then ignore
        if(destination.droppableId === source.droppableId && destination.source === source.index){
            return;
        }

        //TODO - redorder column
        if(type === "column")
        {
            const newColumnOrder = Array.from(columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId)

            setColumnOrder(newColumnOrder);
            return;
        }


        
        const start = columnsList[source.droppableId]
        const end = columnsList[destination.droppableId]

        console.log(start, end)

        // if task is moved within the same column 
        if(start === end)
        {
            const newTaskIds = Array.from(start.tasks);
            // move the task from its previos index to its new index in the array 
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            

            const newColumn = {
                ...start,
                tasks:newTaskIds
            }
            
            const updatedColumnList = {
                ...columnsList,
                [newColumn.id]:newColumn
            }

            setColumnsList(updatedColumnList);

            return;
        }

        // moving a task from one to another  - needs to change both column tasks arrays.. remove from the first and ad toThe second
        const startTaskIds = Array.from(start.tasks);
        startTaskIds.splice(source.index,1);
        const newStart = {...start, tasks:startTaskIds}

        const finishTaskIds = Array.from(end.tasks);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {...end, tasks:finishTaskIds}

        const updatedColumnList = {
            ...columnsList,
            [newStart.id]:newStart,
            [newFinish.id]:newFinish
        }

        console.log(updatedColumnList);

        setColumnsList(updatedColumnList);

        
    }


    return (
        <div>
            <h3>{board.name}</h3>
            <DragDropContext
                    onDragEnd={onDragEnd}
            >
                {
                    <Droppable 
                        droppableId="board-columns" 
                        direction="horizontal" 
                        type="column"
                    >
                        {
                            provided => (
                                <Container {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                        columnOrder.map((columnId, index) =>
                                        {
                                            const column = columnsList[columnId];
                                            const tasks = column.tasks.map((taskId) => tasksList[taskId]);
                                            return (<Column column={column} tasks={tasks} index={index}/>)
                                        })
                                    }
                                    {provided.placeholder}
                                </Container>
                            )
                        }
                     </Droppable>
                }
            </DragDropContext>
            
        </div>
    )
};

const Container = styled.div`
    width:100%;
    display:flex;
`

 