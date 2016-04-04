import ActionTypes from './constants/ActionTypes'; 
import Immutable from 'immutable';

export default function reducer(
  state = Immutable.Map({
    dropdown: null,
    tooltip: null,
  }),
  action
) {
  switch (action.type) {
    case ActionTypes.HIDE_DROPDOWN: {
      return state.set('dropdown', null);
    }
      
    case ActionTypes.HIDE_TOOLTIP: {
      return state.set('tooltip', null);
    }

    case ActionTypes.SHOW_DROPDOWN: {
      return state.set('dropdown', action.dropdown);
    }

    case ActionTypes.SHOW_TOOLTIP: {
      return state.set('tooltip', action.tooltip);
    }
    
    default: {
      return state;
    }
  }
}
