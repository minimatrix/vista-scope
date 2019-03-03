import React from 'react';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import Task from './Task';

const Column = (props) =>{
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {
                (provided)=>(
                    <Container {...provided.draggableProps} ref={provided.innerRef}>
                        <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                        <Droppable droppableId={props.column.id} type="task">
                        {
                            (provided)=>(
                                <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                {
                                    props.tasks.map((task,index) => <Task key={task.id} task={task} index={index}/>)
                                }
                                {provided.placeholder}
                            </TaskList>    
                            )
                        }
                            
                        </Droppable>
                        
                        <div style={{fontSize:"0.8em", padding:10,textAlign:"left"}}> + Add Card</div>
                    </Container>
                )
            }
           

        </Draggable>
        
    )
}

const Container = styled.div`
    width:200px; 
    margin:10px;
    text-align:center; 
    background:lightgrey;
    align-self: flex-start;  
    border-radius:3px
`

const Title = styled.h5`

    font-size:0.8em;
    margin:5px;
`

const TaskList  = styled.div`
    padding:5px;
`

export default Column;