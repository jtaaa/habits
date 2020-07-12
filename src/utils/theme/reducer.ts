import { Action } from './actions';
import { initialState } from './state';
import ActionTypes from './actions';

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
