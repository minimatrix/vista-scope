import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Task = (props) =>{
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {
                (provided)=> (
                    <Container  
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef}
                    >
                        <span>{props.task.content}</span>
                    </Container>
                )
                
            }
           
        </Draggable>
        
    )
}

const Container = styled.div` 
    margin:5px;
    background:white;
    border-radius:3px
    font-size:0.8em;
    padding:5px;
    text-align:left;

`

export default Task;