import classNames from 'classnames';
import DropdownPanel from './DropdownPanel';
import DropdownTrigger from '../containers/DropdownTrigger';
import DropdownTypes from '../constants/DropdownTypes';
import React from 'react';
import styles from './Slack.scss';
import Tooltip from './Tooltip';
import TooltipTrigger from '../containers/TooltipTrigger';
import TooltipTypes from '../constants/TooltipTypes';

class Slack extends React.Component {
  render() {
    return (
      <div className={styles.slack}>
        <div className={styles.channels}>
          <DropdownTrigger
            type={DropdownTypes.TEAM_MENU}
          >
            <div className={styles.teamMenu}>
              <div className={styles.teamName}>
                Clari
                <i className={classNames(styles.teamMenuIcon, 'fa', 'fa-chevron-down')}/>
              </div>
              <TooltipTrigger
                type={TooltipTypes.NOTIFICATION_BUTTON}
              >
                <button
                  className={styles.notificationButton}
                >
                  <i className={classNames(styles.notificationIcon, 'fa', 'fa-bell-o')}/>
                </button>
                <Tooltip text="Notifications"/>
              </TooltipTrigger>
            </div>
            <DropdownPanel/>
          </DropdownTrigger>
        </div>
        <div className={styles.messages}>
        </div>
      </div>
    );
  }
}

export default Slack;
