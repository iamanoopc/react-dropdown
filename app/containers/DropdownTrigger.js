import './DropdownTrigger.scss';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { hideDropdown, showDropdown } from '../actions';
import Immutable from 'immutable';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TetherComponent from 'react-tether';

class DropdownTrigger extends React.Component {
  static defaultProps = {
    attachment: 'top left',
    targetAttachment: 'bottom left',
  };

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch, dropdown, type } = this.props;
    if (dropdown) {
      dispatch(hideDropdown());
    } else {
      dispatch(showDropdown(Immutable.Map({
        type,
      })));
    }
  }

  render() {
    const {
      activeClassName,
      attachment,
      children,
      dropdown,
      targetAttachment,
      type,
    } = this.props;

    const childArray = React.Children.toArray(children);
    const active = dropdown && dropdown.get('type') === type;

    return (
      <TetherComponent
        attachment={attachment}
        constraints={[{
          to: 'window',
          attachment: 'together',
          pin: true,
        }]}
        targetAttachment={targetAttachment}
      >
        {React.cloneElement(childArray[0], {
          className: classNames(childArray[0].props.className, active && activeClassName),
          onClick: this.handleClick,
        })}
        <ReactCSSTransitionGroup
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
          transitionName="DropdownTrigger-dropdownTransitionGroup"
        >
          {active && childArray[1]}
        </ReactCSSTransitionGroup>
      </TetherComponent>
    );
  }
}

export default connect(state => ({
  dropdown: state.get('dropdown'),
}))(DropdownTrigger);
