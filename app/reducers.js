import ActionTypes from './constants/ActionTypes'; 
import Immutable from 'immutable';

export default function reducer(
  state = Immutable.Map({
    tooltip: null,
  }),
  action
) {
  switch (action.type) {
    case ActionTypes.HIDE_TOOLTIP: {
      return state.set('tooltip', null);
    }

    case ActionTypes.SHOW_TOOLTIP: {
      return state.set('tooltip', action.tooltip);
    }
    
    default: {
      return state;
    }
  }
}
