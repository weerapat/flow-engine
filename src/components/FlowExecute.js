import React, { Component } from 'react';

class FlowExecute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objectErrorText: '',
      objectToPass: {
        color: 'red',
        size: 12
      },
      results: []
    };
  }

  render() {
    return (
      <div className="App__panel">
        Hello FlowExecute
      </div>
    );
  }
}

export default FlowExecute;
