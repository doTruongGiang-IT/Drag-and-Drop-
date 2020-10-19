import {CONSTANTS} from './index';

export const addList = (title) => {
    return {
        type: CONSTANTS.addList,
        payload: title
    }
};

export const dragTask = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId, type) => {
    return {
        type: CONSTANTS.dragHappened,
        payload: {
            droppableIdStart, 
            droppableIdEnd, 
            droppableIndexStart, 
            droppableIndexEnd, 
            draggableId,
            type
        }
    }
};