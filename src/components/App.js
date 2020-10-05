import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

class App extends Component {
  render() {
    let {lists} = this.props;

    return (
      <div className="App">
        <h1><center>Trello Dashboard</center></h1>
        <div style={style.App}>
          { lists.map(list => {
            return <TrelloList key={list.id} title={list.title} cards={list.cards} />
          }) }
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const style = {
  App: {
    display: 'flex'
  }
}

const stateToProps = state => {
  return {
    lists: state.lists
  };
};

export default connect(stateToProps, null)(App);
