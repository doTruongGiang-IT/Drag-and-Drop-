import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const TrelloList = ({title, cards}) => {
    return (
        <div style={style.container}>
            <h2>{title}</h2>
            { cards.map(card => {
                return <TrelloCard key={card.id} content={card.text} />
            }) }
            <TrelloActionButton />
        </div>
    );
};

const style = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        height: '100%',
        padding: 5,
        marginLeft: 20,
        cursor: 'pointer',
        textAlign: 'center'
    }
};

export default TrelloList;