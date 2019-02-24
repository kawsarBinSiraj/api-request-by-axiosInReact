import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// component
import ListGroup from './components/list-group/ListGroup';


class App extends Component {
  render() {
    return (
      <div className="App">
          <ListGroup />
      </div>
    );
  }
}

export default App;
