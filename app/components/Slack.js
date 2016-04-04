import classNames from 'classnames';
import DropdownPanel from './DropdownPanel';
import DropdownTrigger from '../containers/DropdownTrigger';
import DropdownTypes from '../constants/DropdownTypes';
import Immutable from 'immutable';
import React from 'react';
import SearchPanel from './SearchPanel';
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
            activeClassName={styles['teamMenu--active']}
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
                  type="button"
                >
                  <i className={classNames(styles.notificationIcon, 'fa', 'fa-bell-o')}/>
                </button>
                <Tooltip text="Notifications"/>
              </TooltipTrigger>
            </div>
            <DropdownPanel
              dropdown={Immutable.Map({
                sections: Immutable.List([
                  Immutable.Map({
                    header: Immutable.Map({
                      primary: 'mking',
                      secondary: '@mking',
                    }),
                    items: Immutable.List([
                      'Profile & account',
                      'Preferences',
                      <span>Set yourself to <strong>away</strong></span>,
                      'Help & feedback',
                    ]),
                  }),
                  Immutable.Map({
                    header: Immutable.Map({
                      primary: 'Clari',
                      secondary: 'clari.slack.com',
                    }),
                    items: Immutable.List([
                      'App & integrations',
                      'Customize Slack',
                      'Team directory',
                      <span>Sign out of <strong>Clari</strong></span>,
                    ]),
                  }),
                  Immutable.Map({
                    items: Immutable.List([
                      'Sign into another team...',
                    ]),
                  }),
                  Immutable.Map({
                    items: Immutable.List([
                      <strong>Download the Slack app...</strong>,
                    ]),
                  }),
                ]),
              })}
            />
          </DropdownTrigger>
        </div>
        <div className={styles.messages}>
          <div className={styles.messagesHeader}>
            <div className={styles.channelInfo}>
              <div className={styles.channelName}>
                #test
              </div>
              <TooltipTrigger
                type={TooltipTypes.CHANNEL_MEMBERS}
              >
                <div className={styles.channelMembers}>
                  1 member
                </div>
                <Tooltip text="View member list (1/1 online)"/>
              </TooltipTrigger>
            </div>
            <div className={styles.messagesHeaderRight}>
              <div className={styles.channelActions}>
                <TooltipTrigger
                  type={TooltipTypes.CHANNEL_CALL}
                >
                  <button
                    className={styles.channelAction}
                    type="button"
                  >
                    <i className={classNames(styles.channelActionIcon, 'fa', 'fa-phone')}/>
                  </button>
                  <Tooltip text="Start a call in this channel"/>
                </TooltipTrigger>
                <DropdownTrigger
                  activeClassName={styles['channelAction--active']}
                  type={DropdownTypes.CHANNEL_SETTINGS}
                >
                  <TooltipTrigger
                    type={TooltipTypes.CHANNEL_SETTINGS}
                  >
                    <button
                      className={styles.channelAction}
                      type="button"
                    >
                      <i className={classNames(styles.channelActionIcon, 'fa', 'fa-gear')}/>
                    </button>
                    <Tooltip text="Channel Settings"/>
                  </TooltipTrigger>
                  <DropdownPanel
                    dropdown={Immutable.Map({
                      sections: Immutable.List([
                        Immutable.Map({
                          items: Immutable.List([
                            'View channel details',
                            'Invite team members to join...',
                            'Additional options...',
                          ]),
                        }),
                        Immutable.Map({
                          items: Immutable.List([
                            'Notification preferences...',
                            'Mute #test',
                          ]),
                        }),
                        Immutable.Map({
                          items: Immutable.List([
                            'Add an app or custom integration',
                          ]),
                        }),
                        Immutable.Map({
                          items: Immutable.List([
                            'Leave #test',
                          ]),
                        }),
                      ]),
                    })}
                  />
                </DropdownTrigger>
                <TooltipTrigger
                  type={TooltipTypes.CHANNEL_DETAILS}
                >
                  <button
                    className={styles.channelAction}
                    type="button"
                  >
                    <i className={classNames(styles.channelActionIcon, 'fa', 'fa-list-alt')}/>
                  </button>
                  <Tooltip text="Show Channel Details"/>
                </TooltipTrigger>
              </div>
              <div className={styles.search}>
                <DropdownTrigger
                  activeClassName={styles['searchInputContainer--active']}
                  attachment="top right"
                  targetAttachment="bottom right"
                  type={DropdownTypes.SEARCH}
                >
                  <div className={styles.searchInputContainer}>
                    <input
                      className={styles.searchInput}
                      placeholder="Search"
                      type="text"
                    />
                    <i className={classNames(styles.searchIcon, 'fa', 'fa-search')}/>
                  </div>
                  <SearchPanel/>
                </DropdownTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slack;
