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
    const { children, dropdown, type } = this.props;
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
          onClick: this.handleClick,
        })}
        <ReactCSSTransitionGroup
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
          transitionName={styles.dropdownTransitionGroup}
        >
          {dropdown && dropdown.get('type') === type && childArray[1]}
        </ReactCSSTransitionGroup>
      </TetherComponent>
    );
  }
}

export default connect(state => ({
  dropdown: state.get('dropdown'),
}))(DropdownTrigger);
