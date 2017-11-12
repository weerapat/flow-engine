import React, { Component } from 'react';
import Rule from './Rule';
import PropTypes from 'prop-types'

class RuleList extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }
  
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
  rules: PropTypes.array
};

export default RuleList;
