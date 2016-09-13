import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import todos from './todos';
import todosFilter from './todosFilter';

const rootReducer = combineReducers({
  routing,
  todos,
  todosFilter,
});

export default rootReducer;
