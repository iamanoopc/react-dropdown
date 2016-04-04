import classNames from 'classnames';
import React from 'react';
import styles from './Slack.scss';
import TooltipTrigger from '../containers/TooltipTrigger';
import TooltipTypes from '../constants/TooltipTypes';

class Slack extends React.Component {
  render() {
    return (
      <div className={styles.slack}>
        <div className={styles.channels}>
          <div className={styles.teamMenu}>
            <div className={styles.teamName}>
              Clari
              <i className={classNames(styles.teamMenuIcon, 'fa', 'fa-chevron-down')}/>
            </div>
            <TooltipTrigger
              text="Notifications"
              type={TooltipTypes.NOTIFICATION_BUTTON}
            >
              <button
                className={styles.notificationButton}
              >
                <i className={classNames(styles.notificationIcon, 'fa', 'fa-bell-o')}/>
              </button>
            </TooltipTrigger>
          </div>
        </div>
        <div className={styles.messages}>
        </div>
      </div>
    );
  }
}

export default Slack;
