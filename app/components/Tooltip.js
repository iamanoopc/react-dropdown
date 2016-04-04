import classNames from 'classnames';
import React from 'react';
import styles from './Tooltip.scss';

class Tooltip extends React.Component {
  render() {
    const { className, text } = this.props;
    return (
      <div className={classNames(styles.tooltip, className)}>
        {text}
      </div>
    );
  }
}

export default Tooltip;
