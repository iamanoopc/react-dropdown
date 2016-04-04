import ActionTypes from './constants/ActionTypes';

export function hideDropdown() {
  return {
    type: ActionTypes.HIDE_DROPDOWN,
  };
}

export function hideTooltip() {
  return {
    type: ActionTypes.HIDE_TOOLTIP,
  };
}

export function showDropdown(dropdown) {
  return {
    type: ActionTypes.SHOW_DROPDOWN,
    dropdown,
  };
}

export function showTooltip(tooltip) {
  return {
    type: ActionTypes.SHOW_TOOLTIP,
    tooltip,
  };  
}
