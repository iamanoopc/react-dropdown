import classNames from 'classnames';
import { connect } from 'react-redux';
import { hideDropdown, showDropdown } from '../actions';
import Immutable from 'immutable';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TetherComponent from 'react-tether';
import styles from './DropdownTrigger.scss';

class DropdownTrigger extends React.Component {
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
      children,
      dropdown,
      type,
    } = this.props;

    const childArray = React.Children.toArray(children);
    const active = dropdown && dropdown.get('type') === type;

    return (
      <TetherComponent
        attachment="bottom left"
        constraints={[{
          to: 'window',
          attachment: 'together',
          pin: true,
        }]}
        targetAttachment="top left"
      >
        {React.cloneElement(childArray[0], {
          className: classNames(childArray[0].props.className, active && activeClassName),
          onClick: this.handleClick,
        })}
        <ReactCSSTransitionGroup
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
          transitionName={styles.dropdownTransitionGroup}
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
