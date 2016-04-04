import './TooltipTrigger.scss';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { hideTooltip, showTooltip } from '../actions';
import Immutable from 'immutable';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TetherComponent from 'react-tether';

class TooltipTrigger extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleMouseEnter() {
    const { dispatch, type } = this.props;
    dispatch(showTooltip(Immutable.Map({
      type,
    })));
  }

  handleMouseLeave() {
    const { dispatch } = this.props;
    dispatch(hideTooltip());
  }

  render() {
    const {
      children,
      className,
      dropdown,
      onClick,
      tooltip,
      type,
    } = this.props;

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
          className: classNames(childArray[0].props.className, className),
          onClick,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
        })}
        <ReactCSSTransitionGroup
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
          transitionName="TooltipTrigger-tooltipTransitionGroup"
        >
          {tooltip && tooltip.get('type') === type && !dropdown && childArray[1]}
        </ReactCSSTransitionGroup>
      </TetherComponent>
    );
  }
}

export default connect(state => ({
  dropdown: state.get('dropdown'),
  tooltip: state.get('tooltip'),
}))(TooltipTrigger);
