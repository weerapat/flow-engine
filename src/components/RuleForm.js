import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RuleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields : {
        rule_id: '',
        rule_title: '',
        rule_body: {},
        true_id: null,
        false_id: null
      },
      formErrors : {}
    }
  }

  handleInputChange(e) {
    let newState = {};
    let inputName = e.target.name;
    let value = e.target.value;

    newState[inputName] = value;

    this.setState(newState,
      () => { this.validateField(inputName, value) });
  };

  validateField(inputName, value) {
    let fieldValidationErrors = this.state.formErrors;

    console.log(`${inputName} + ${value}`);

    switch(inputName) {
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <div className="App__panel">
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div className="Form__group">
            <label htmlFor="rule-title">Rule title</label>
            <input
              type="text"
              className="Form__control"
              id="rule-title"
              name="rule_title"
              placeholder="Rule Title"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="Form__group">
            <label htmlFor="rule-id">Rule id</label>
            <input
              type="text"
              className="Form__control"
              id="rule-id"
              name="rule_id"
              placeholder="Rule Id"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="Form__group">
            <label htmlFor="rule-body">Rule Body</label>
            <textarea
              className="Form__control"
              id="rule-body"
              name="rule_body"
              rows="3"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="Form__group">
            <label htmlFor="rule-title">If rule passed</label>
            <input
              type="text"
              className="Form__control"
              id="rule-passed"
              name="true_id"
              placeholder="Rule id"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="Form__group">
            <label htmlFor="rule-title">If rule failed</label>
            <input
              type="text"
              className="Form__control"
              id="rule-failed"
              name="false_id"
              placeholder="Rule id"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>

          <button
            type="submit"
            className="App__button"
          >Add new rule
          </button>
        </form>
      </div>
    );
  }
}

RuleForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default RuleForm;
