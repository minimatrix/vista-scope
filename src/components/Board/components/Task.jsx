import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Task = (props) =>{
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {
                (provided, snapshot)=> (
                    <Container  
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
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
    box-shadow:${props => (props.isDragging && "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)")};
`

export default Task;