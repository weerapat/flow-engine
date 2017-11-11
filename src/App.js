import React, { Component } from 'react';
import RuleForm from './components/RuleForm';
import RuleListing from './components/RuleListing';
import FlowExecute from './components/FlowExecute';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__header">
            Flow Engine
          </h1>
          <RuleForm />
          <RuleListing />
          <FlowExecute />
        </div>
      </div>
    );
  }
}

export default App;
