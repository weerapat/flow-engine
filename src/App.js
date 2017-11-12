import React, { Component } from 'react';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';
import FlowExecute from './components/FlowExecute';
import FlowStore from './FlowStore';
import './App.css';

class FlowEngineApp extends Component {

  constructor(props) {
    super(props);

    this.FlowStore = new FlowStore();
    this.state = {
      rules : this.FlowStore.getRules(),
      ruleErrors : {
        'message' : 'id is duplicated'
      }
    };
  }

  addRule() {
    this.setState({rules : this.FlowStore.addRule()});
  }

  removeRule(rule) {
    this.setState({rules : this.FlowStore.removeRule(rule)});
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__header">
            Flow Engine
          </h1>
          <RuleForm
            onFormSubmit={this.addRule.bind(this)}
          />
          <RuleList
            rules={this.state.rules}
            onRuleRemove={this.removeRule.bind(this)}
          />
          <FlowExecute />
        </div>
      </div>
    );
  }
}

export default FlowEngineApp;
