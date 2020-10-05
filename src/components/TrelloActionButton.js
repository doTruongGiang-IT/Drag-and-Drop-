import { Button, Icon } from '@material-ui/core';
import React, { Component } from 'react';
import TextArea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';

class TrelloActionButton extends Component {
    state = {
        openForm: false,
        text: ''
    };

    openForm = () => {
        this.setState({
            openForm: true
        });
    };

    closeForm = () => {
        this.setState({
            openForm: false
        });
    };

    handleInput = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    renderAddButton = () => {
        let {list} = this.props;
        let buttonText = list ? 'Add another list' : 'Add another card';
        let buttonTextOpacity = list ? 1 : 0.5;
        let buttonTextColor = list ? 'white' : 'inherit';
        let buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';
        let buttonMarginLeft = list ? 15 : 0;
        let buttonWidth = list ? 160 : 270;

        return (
            <div
             onClick={this.openForm}
             style={{...style.button, width:buttonWidth, marginLeft:buttonMarginLeft, opacity:buttonTextOpacity, color:buttonTextColor, backgroundColor:buttonTextBackground}}>
                <Icon>add</Icon>
                <span>{buttonText}</span>
            </div>
        );
    };

    renderForm = () => {
        let {list} = this.props;
        let placeholder = list ? 'Enter list title' : 'Enter title for this card';
        let buttonTitle = list ? 'Add list' : 'Add card';

        return <div style={style.form}>
                    <Card style={style.card}>
                        <TextArea
                            placeholder={placeholder}
                            autoFocus
                            onBlur={this.closeForm}
                            value={this.state.text}
                            onChange={this.handleInput}
                            style={style.textArea}
                        />
                    </Card>
                    <div style={style.buttonGroup}>
                        <Button variant="contained" style={{color:"white", backgroundColor:"#5aac44"}}>
                            {buttonTitle}
                        </Button>
                        <Icon style={{marginLeft:10}}>close</Icon>
                    </div>
                </div>
    };

    render() {
        return this.state.openForm ? this.renderForm() : this.renderAddButton();
    }
};

const style = {
    button: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 3,
        height: 36,
        paddingLeft: 10,
        cursor: 'pointer'
    },
    form: {
        margin: 10,
        textAlign: 'left'
    },
    card: {
        minHeight: 80
    },
    textArea: {
        resize: 'none',
        width: 270,
        fontSize: 16,
        border: 'none',
        outline: 'none',
        padding: 10
    },
    buttonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default TrelloActionButton;