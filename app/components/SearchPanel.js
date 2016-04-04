import classNames from 'classnames';
import React from 'react';
import styles from './SearchPanel.scss';

class SearchPanel extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames(styles.panel, className)}>
        <div className={styles.header}>
          Assisted Search
        </div>
        <div className={styles.body}>
          Narrow your search with <span className={styles.modifier}>before:</span>,{' '}
          <span className={styles.modifier}>from:</span>, or{' '}
          <span className={styles.modifier}>in:</span>.{' '}
          Or press the plus key <span className={styles.key}>+</span> to see more modifiers.
        </div>
      </div>
    );
  }
}

export default SearchPanel;
