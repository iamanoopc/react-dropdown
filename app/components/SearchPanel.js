import './SearchPanel.scss';
import classNames from 'classnames';
import React from 'react';

class SearchPanel extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames('SearchPanel', className)}>
        <div className="SearchPanel-header">
          Assisted Search
        </div>
        <div className="SearchPanel-body">
          Narrow your search with <span className="SearchPanel-modifier">before:</span>,{' '}
          <span className="SearchPanel-modifier">from:</span>, or{' '}
          <span className="SearchPanel-modifier">in:</span>.{' '}
          Or press the plus key <span className="SearchPanel-key">+</span> to see more modifiers.
        </div>
      </div>
    );
  }
}

export default SearchPanel;
