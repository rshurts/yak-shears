import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="control has-addons">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          className="input"
          ref={(node) => {
            input = node;
          }}
        />
        <button
          type="submit"
          className="button"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

AddTodo.propTypes = {
  dispatch: PropTypes.func,
};

export default AddTodo;
