import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlowExecute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      objectToExecute: {
        color: 'blue',
        size: 10
      }
    };
  }

  handleObjectChange(e) {
    try {
      let value = JSON.parse(e.target.value);
      this.setState({
        objectToExecute: value,
        error: ''
      });
    } catch(error) {
      this.setState({
        error: error.message
      });
    }
  };

  handleExecute(e) {
    e.preventDefault();
    this.props.onFlowExecute(this.state.objectToExecute);
  }

  render() {
    return (
      <div>
        <h2>Execute Flow</h2>
        <div className="App__panel">
          <div className="Form__group">
            <label htmlFor="rule-body">Rule Body</label>
            <textarea
              className="Form__control"
              id="rule-body"
              name="body"
              rows="3"
              placeholder="function (obj) { return !!obj; }"
              onChange={this.handleObjectChange.bind(this)}
              defaultValue={JSON.stringify(this.state.objectToExecute)}
            />
          </div>
          <div className="Text--error">{this.state.error}</div>
          <button onClick={this.handleExecute.bind(this)}>Execute Flow</button>
          {
            this.props.flowResults.map((result) => <div key={result.title}>
              {result.title}&nbsp;&nbsp;
              <span className={result.status === 'passed' ? 'Text--success' : 'Text--error'}>
                {result.status}
              </span>
            </div>)
          }
        </div>
      </div>
    );
  }
}

FlowExecute.propTypes = {
  onFlowExecute: PropTypes.func.isRequired
};

export default FlowExecute;
