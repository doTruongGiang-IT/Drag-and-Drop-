

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

        default:
            return state;
    }
};

export default listReducer;