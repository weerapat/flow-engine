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
      nextRuleId : this.FlowStore.getNextRuleId(),
      rules : this.FlowStore.getRules(),
      flowResults : []
    };
  }

  addRule(rule) {
    this.setState({rules : this.FlowStore.addRule(rule)});
    this.setState({nextRuleId : this.FlowStore.getNextRuleId()});
  }

  removeRule(rule) {
    if (window.confirm('Are you sure?')) {
      this.setState({rules : this.FlowStore.removeRule(rule)});
    }
  }

  executeFlow(obj) {
    this.setState({flowResults : this.FlowStore.executeFlow(obj)});
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__header">
            Flow Engine
          </h1>
          <RuleForm
            nextRuleId={this.state.nextRuleId}
            onFormSubmit={this.addRule.bind(this)}
          />
          <RuleList
            rules={this.state.rules}
            onRuleRemove={this.removeRule.bind(this)}
          />
          <FlowExecute
            flowResults={this.state.flowResults}
            onFlowExecute={this.executeFlow.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default FlowEngineApp;
