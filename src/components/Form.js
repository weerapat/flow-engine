import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__header">
            Flow Engine
          </h1>
          <div className="App__panel">
            <h2>Form</h2>
            <form>
              <div className="Form__group">
                <label for="rule-title">Rule title</label>
                <input type="text" className="Form__control" id="rule-title" placeholder="Rule title"/>
              </div>
              <div class="form-group">
                <label for="rule-body">Rule Body</label>
                <textarea className="Form__control" id="rule-body" rows="3"></textarea>
              </div>
              <button type="button" className="App__button">Submit</button>
            </form>
          </div>

          <div className="App__panel">
            <h2>Rules</h2>
          </div>

          <div className="App__panel">
            <h2>test</h2>
          </div>
        </div>{/* /.App__container */}
      </div>
    );
  }
}

export default Form;
