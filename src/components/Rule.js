import React from 'react';
import PropTypes from 'prop-types';

const Rule = ({onRemove, id, title, body, true_id, false_id}) => (
  <div className="App__panel App__panel--nomargin">
    <button className="App__button App__button--danger small pull-right" onClick={onRemove}>Delete</button>
    <label>{title}</label>
    <div>Id: <span className="Text--success">{id}</span></div>
    <div>Body: {body}</div>
    <div>Rule passed Id: <span className="Text--success">{true_id ? true_id : 'null'}</span></div>
    <div>Rule failed Id: <span className="Text--success">{false_id ? false_id : 'null'}</span></div>
  </div>
);

Rule.propTypes = {
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Rule
