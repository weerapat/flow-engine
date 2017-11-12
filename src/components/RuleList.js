import React, { Component } from 'react';
import Rule from './Rule';
import PropTypes from 'prop-types'

class RuleList extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }

  onTodoClick(id) {
    alert('I will delete you soon' + id);
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
