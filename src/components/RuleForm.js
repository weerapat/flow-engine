import React, { Component } from 'react';

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
    let fieldName = e.target.name;
    let value = e.target.value;

    newState[fieldName] = value;

    this.setState(newState,
      () => { this.validateField(fieldName, value) });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;

    console.log(`${fieldName} + ${value}`);

    switch(fieldName) {
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors});
  }

  submit() {
    alert('hi');
  }

  render() {
    return (
      <div className="App__panel">
        <h2>Form</h2>
        <form>
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
            type="button"
            className="App__button"
            onClick={this.submit.bind(this)}
          >Add new rule
          </button>
        </form>
      </div>
    );
  }
}

export default RuleForm;
