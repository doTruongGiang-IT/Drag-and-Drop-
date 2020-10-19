import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #ccc;
    border-radius: 3px;
    width: 300px;
    height: 100%;
    padding: 5px;
    margin-left: 20px;
    cursor: pointer;
    text-align: center;
`

const TrelloList = ({title, cards, listID, index}) => {
    return (
        <Draggable draggableId={listID} index={index}>
            {provided => (
                <ListContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Droppable droppableId={listID}>
                        { provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <h2>{title}</h2>
                                { cards.map((card, index) => {
                                    return <TrelloCard key={card.id} index={index} content={card.text} id={card.id} />
                                }) }
                                {provided.placeholder}
                                <TrelloActionButton listID={listID} />
                            </div>
                        ) }
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default TrelloList;