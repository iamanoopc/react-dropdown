import './Tooltip.scss';
import classNames from 'classnames';
import React from 'react';

class Tooltip extends React.Component {
  render() {
    const { className, text } = this.props;
    return (
      <div className={classNames('Tooltip', className)}>
        {text}
      </div>
    );
  }
}

export default Tooltip;
