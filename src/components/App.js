import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {dragTask} from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`
class App extends Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if(!destination) {
      return;
    }
    this.props.dispatch(dragTask(source.droppableId, 
                              destination.droppableId, 
                              source.index, 
                              destination.index, 
                              draggableId, type));
  };

  render() {
    let {lists} = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h1><center>Trello Dashboard</center></h1>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
                { lists.map((list, index) => {
                  return <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} index={index} />
                }) }
                <TrelloActionButton list />
              </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const stateToProps = state => {
  return {
    lists: state.lists
  };
};

export default connect(stateToProps)(App);
