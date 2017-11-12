import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RuleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        title: '',
        body: '',
        true_id: '',
        false_id: ''
      },
      formErrors : {}
    };
  }

  handleInputChange(e) {
    let newState = {fields : this.state.fields};
    let inputName = e.target.name;
    let value = e.target.value;

    newState.fields[inputName] = value;

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

  clearForm() {
    this.setState({
      fields: {
        title: '',
        body: '',
        true_id: '',
        false_id: ''
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.fields);
    this.clearForm();
  }

  render() {
    return (
      <div className="App__panel">
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div className="Form__group">
            <label htmlFor="rule-id">Rule id</label> : {this.props.nextRuleId}
          </div>
          <div className="Form__group">
            <label htmlFor="rule-title">Rule title</label>
            <input
              type="text"
              className="Form__control"
              id="rule-title"
              name="title"
              placeholder="Rule Title"
              value={this.state.fields.title}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="Form__group">
            <label htmlFor="rule-body">Rule Body</label>
            <textarea
              className="Form__control"
              id="rule-body"
              name="body"
              rows="3"
              value={this.state.fields.body}
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
              value={this.state.fields.true_id}
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
              value={this.state.fields.false_id}
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
