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
      formErrors: {}
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
    let errors = this.state.formErrors;

    switch(inputName) {
      case 'title':
        errors.title = (value) ? '' : 'Title is required';
        break;
      case 'body':
        errors.body = (value) ? '' : 'Body is required ';

        try {
          let fn = eval(`(${value})`);
          if (typeof fn !== 'function') {
            errors.body += 'Body should be a function';
          } else {
            errors.body = '';
          }
        }
        catch (error) {
            errors.body = `Body should be a function: ${error.message}`;
        }
        break;
      case 'true_id':
        if (!!value && !(!isNaN(parseFloat(value)) && isFinite(value))) {
          errors.true_id = 'Id should be number';
        } else if (value == this.props.nextRuleId) {
          errors.true_id = 'No, you can\'t assign number itself id';
        } else {
          errors.true_id = '';
        }
        break;
      case 'false_id':
        if (!!value && !(!isNaN(parseFloat(value)) && isFinite(value))) {
          errors.false_id = 'Id should be number';
        } else if (value == this.props.nextRuleId) {
          errors.false_id = 'No, you can\'t assign number itself id';
        } else {
          errors.false_id = '';
        }
        break;
      default:
        break;
    }
    this.setState({formErrors: errors});
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

    for (const prop in this.state.fields) {
      if (this.state.fields.hasOwnProperty(prop)) {
        this.validateField(prop, this.state.fields[prop]);
      }

      if (this.state.formErrors[prop] !== "" && !!this.state.formErrors[prop]) {
        return false;
      }
    }

    this.props.onFormSubmit(this.state.fields);
    this.clearForm();
  }

  render() {
    return (
      <div>
        <h2>Create flow</h2>
        <div className="App__panel">
        <div ></div>
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
            <span className="Text--error">{this.state.formErrors.title}</span>
          </div>
          <div className="Form__group">
            <label htmlFor="rule-body">Rule Body</label>
            <textarea
              className="Form__control"
              id="rule-body"
              name="body"
              rows="3"
              placeholder="function (obj) { return !!obj; }"
              value={this.state.fields.body}
              onChange={this.handleInputChange.bind(this)}
            />
            <span className="Text--error">{this.state.formErrors.body}</span>
          </div>
          <div className="Form__group">
            <label htmlFor="rule-passed">If rule passed</label>
            <input
              type="text"
              className="Form__control"
              id="rule-passed"
              name="true_id"
              placeholder="Rule id"
              value={this.state.fields.true_id}
              onChange={this.handleInputChange.bind(this)}
            />
            <span className="Text--error">{this.state.formErrors.true_id}</span>
          </div>
          <div className="Form__group">
            <label htmlFor="rule-failed">If rule failed</label>
            <input
              type="text"
              className="Form__control"
              id="rule-failed"
              name="false_id"
              placeholder="Rule id"
              value={this.state.fields.false_id}
              onChange={this.handleInputChange.bind(this)}
            />
            <span className="Text--error">{this.state.formErrors.false_id}</span>
          </div>

          <button
            type="submit"
            className="App__button--submit"
          >Add new rule
          </button>
        </form>
      </div>
      </div>
    );
  }
}

RuleForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default RuleForm;
