import {CONSTANTS} from '../actions';

let listID = 2;
let cardID = 3;

const initialState = [
    {
        title: 'To do',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'Do homework'
            },
            {
                id: 1,
                text: 'Translate Blog'
            }
        ]
    },
    {
        title: 'Doing',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'Learn redux'
            },
            {
                id: 1,
                text: 'Learn Java collection'
            },
            {
                id: 2,
                text: 'Learn Spring boot'
            }
        ]
    },
    {
        title: 'Done',
        id: 2,
        cards: [
            {
                id: 0,
                text: 'Learn react'
            },
            {
                id: 1,
                text: 'Learn Java basic'
            },
            {
                id: 2,
                text: 'Learn SASS'
            },
            {
                id: 3,
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
                id: listID,
                cards: []
            };
            listID += 1;
            return [...state, newList];
        case CONSTANTS.addCard:    
            let newCard = {
                id: cardID,
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
        default:
            return state;
    }
};

export default listReducer;