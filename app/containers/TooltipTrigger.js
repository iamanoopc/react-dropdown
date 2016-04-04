import { connect } from 'react-redux';
import { hideTooltip, showTooltip } from '../actions';
import Immutable from 'immutable';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TetherComponent from 'react-tether';
import styles from './TooltipTrigger.scss';

class TooltipTrigger extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleMouseEnter() {
    const { dispatch, text, type } = this.props;
    dispatch(showTooltip(Immutable.Map({
      type,
      text,
    })));
  }

  handleMouseLeave() {
    const { dispatch } = this.props;
    dispatch(hideTooltip());
  }

  render() {
    const { children, tooltip, type } = this.props;
    const childArray = React.Children.toArray(children);
    return (
      <TetherComponent
        attachment="top center"
        constraints={[{
          to: 'window',
          attachment: 'together',
          pin: true,
        }]}
      >
        {React.cloneElement(childArray[0], {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
        })}
        <ReactCSSTransitionGroup
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
          transitionName={styles.tooltipTransitionGroup}
        >
          {tooltip && tooltip.get('type') === type && childArray[1]}
        </ReactCSSTransitionGroup>
      </TetherComponent>
    );
  }
}

export default connect(state => ({
  tooltip: state.get('tooltip'),
}))(TooltipTrigger);
