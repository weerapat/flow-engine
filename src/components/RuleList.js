import React, { Component } from 'react';
import Rule from './Rule';
import PropTypes from 'prop-types';

class RuleList extends Component {
  render() {
    return (
      <div className="App__panel">
        <ul>
          {this.props.rules.map(rule => (
            <Rule key={rule.id} {...rule} onRemove={() => this.props.onRuleRemove(rule)} />
          ))}
        </ul>
      </div>
    );
  }
}

RuleList.propTypes = {
  onRuleRemove: PropTypes.func.isRequired,
  rules: PropTypes.array
};

export default RuleList;
