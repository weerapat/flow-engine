import React, { Component } from 'react';
import Rule from './Rule';
import PropTypes from 'prop-types';

class RuleList extends Component {
  render() {
    return (
      <div>
        <h2>List of rules</h2>
        <div className="App__panel">
          {this.props.rules.map(rule => (
            <Rule key={rule.id} {...rule} onRemove={() => this.props.onRuleRemove(rule)} />
          ))}
        </div>
      </div>
    );
  }
}

RuleList.propTypes = {
  onRuleRemove: PropTypes.func.isRequired,
  rules: PropTypes.array
};

export default RuleList;
