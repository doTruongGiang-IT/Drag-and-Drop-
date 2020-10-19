import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin: 10px;
    cursor: pointer;
    text-align: left;
`

const TrelloCard = ({content, id, index}) => {
    return (
        <Draggable draggableId={id} index={index}>
            { provided => (
                <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom>
                                {content}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContainer>
            ) }
        </Draggable>
    )
};

export default TrelloCard;