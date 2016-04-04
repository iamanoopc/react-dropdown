import classNames from 'classnames';
import React from 'react';
import styles from './DropdownPanel.scss';

class DropdownPanel extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames(styles.panel, className)}>
        <div className={styles.menuSection}>
          <div className={styles.menuHeader}>
            <div className={styles.menuHeaderPrimary}>
              mking
            </div>
            <div className={styles.menuHeaderSecondary}>
              @mking
            </div>
          </div>
          <a
            className={styles.menuItem}
            href="#"
          >
            Profile & account
          </a>
          <a
            className={styles.menuItem}
            href="#"
          >
            Preferences
          </a>
          <a
            className={styles.menuItem}
            href="#"
          >
            Set yourself to <strong>away</strong>
          </a>
          <a
            className={styles.menuItem}
            href="#"
          >
            Help & feedback
          </a>
        </div>
        <div className={styles.menuSection}>
          <div className={styles.menuHeader}>
            <div className={styles.menuHeaderPrimary}>
              Clari
            </div>
            <div className={styles.menuHeaderSecondary}>
              clari.slack.com
            </div>
          </div>
          <a
            className={styles.menuItem}
            href="#"
          >
            App & integrations
          </a>
          <a
            className={styles.menuItem}
            href="#"
          >
            Customize Slack
          </a>
          <a
            className={styles.menuItem}
            href="#"
          >
            Team directory
          </a>
          <a
            className={styles.menuItem}
            href="#"
          >
            Sign out of <strong>Clari</strong>
          </a>
        </div>
        <div className={styles.menuSection}>
          <a
            className={styles.menuItem}
            href="#"
          >
            Sign into another team...
          </a>
        </div>
        <div className={styles.menuSection}>
          <a
            className={styles.menuItem}
            href="#"
          >
            <strong>Download the Slack app...</strong>
          </a>
        </div>
      </div>
    );
  }
}

export default DropdownPanel;
