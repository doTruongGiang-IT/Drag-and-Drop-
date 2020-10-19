import {CONSTANTS} from '../actions';

let listID = 3;
let cardID = 9;

const initialState = [
    {
        title: 'To do',
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: 'Do homework'
            },
            {
                id: `card-${1}`,
                text: 'Translate Blog'
            }
        ]
    },
    {
        title: 'Doing',
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: 'Learn redux'
            },
            {
                id: `card-${3}`,
                text: 'Learn Java collection'
            },
            {
                id: `card-${4}`,
                text: 'Learn Spring boot'
            }
        ]
    },
    {
        title: 'Done',
        id: `list-${2}`,
        cards: [
            {
                id: `card-${5}`,
                text: 'Learn react'
            },
            {
                id: `card-${6}`,
                text: 'Learn Java basic'
            },
            {
                id: `card-${7}`,
                text: 'Learn SASS'
            },
            {
                id: `card-${8}`,
                text: 'Take shower'
            }
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.addList:
            let newList = {
                title: action.payload,
                id: `list-${listID}`,
                cards: []
            };
            listID += 1;
            return [...state, newList];
        case CONSTANTS.addCard: {    
            let newCard = {
                id: `list-${cardID}`,
                text: action.payload.text,
            };
            cardID += 1;
            let newState = state.map(list => {
                if( list.id === action.payload.listID ) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                }else {
                    return list;
                }
            });
            return newState;
        }    
        case CONSTANTS.dragHappened:
            let {droppableIdStart, 
                    droppableIdEnd, 
                    droppableIndexStart, 
                    droppableIndexEnd,
                    type 
                    } = action.payload;
            let newState = [...state];

            //dragging list
            if( type === "list" ) {
                let list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            //in the same list
            if( droppableIdStart === droppableIdEnd ) {
                let list = state.find(list => droppableIdStart === list.id);
                let card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            };

            //other list
            if( droppableIdStart !== droppableIdEnd ) {
                let listStart = state.find(list => droppableIdStart === list.id);
                let card = listStart.cards.splice(droppableIndexStart, 1);
                let listEnd = state.find(list => droppableIdEnd === list.id);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        default:
            return state;
    }
};

export default listReducer;