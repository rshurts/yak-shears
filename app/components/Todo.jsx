import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li>
    <span className="icon" onClick={onClick} onKeyPress={onClick} style={{ cursor: 'pointer' }} tabIndex="0">
      <i className={completed ? 'fa fa-check-square' : 'fa fa-square'} />
    </span>
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
