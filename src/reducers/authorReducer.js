import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function (state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    //return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
