import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({content}) => {
    return (
        <Card style={style.content}>
            <CardContent>
                <Typography gutterBottom>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
};

const style = {
    content: {
        margin: 10,
        cursor: 'pointer',
        textAlign: 'left'
    }
}

export default TrelloCard;