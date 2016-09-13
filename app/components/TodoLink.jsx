import React, { PropTypes } from 'react';

const TodoLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#click"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onKeyPress={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

TodoLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoLink;
