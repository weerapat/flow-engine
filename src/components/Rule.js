import React from 'react';
import PropTypes from 'prop-types';

const Rule = ({ onRemove, id, title, body }) => (
  <li>
    Id = {id}  {title} <button onClick={onRemove}>Delete</button>
    <div>{body}</div>
  </li>
);

Rule.propTypes = {
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Rule
