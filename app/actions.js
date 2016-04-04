import ActionTypes from './constants/ActionTypes';

export function hideTooltip() {
  return {
    type: ActionTypes.HIDE_TOOLTIP,
  };
}

export function showTooltip(tooltip) {
  return {
    type: ActionTypes.SHOW_TOOLTIP,
    tooltip,
  };  
}
