import './Channels.scss';
import classNames from 'classnames';
import DropdownPanel from './DropdownPanel';
import DropdownTrigger from '../containers/DropdownTrigger';
import DropdownTypes from '../constants/DropdownTypes';
import Immutable from 'immutable';
import React from 'react';
import Tooltip from './Tooltip';
import TooltipTrigger from '../containers/TooltipTrigger';
import TooltipTypes from '../constants/TooltipTypes';

class Channels extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames('Channels', className)}>
        <DropdownTrigger
          activeClassName="Channels-teamMenu--active"
          type={DropdownTypes.TEAM_MENU}
        >
          <div className="Channels-teamMenu">
            <div className="Channels-teamName">
              Clari
              <i className={classNames('Channels-teamMenuIcon', 'fa', 'fa-chevron-down')}/>
            </div>
            <DropdownTrigger
              activeClassName="Channels-notificationButton--active"
              type={DropdownTypes.NOTIFICATIONS}
            >
              <TooltipTrigger
                type={TooltipTypes.NOTIFICATIONS}
              >
                <button
                  className="Channels-notificationButton"
                  type="button"
                >
                  <i className={classNames('Channels-notificationIcon', 'fa', 'fa-bell-o')}/>
                </button>
                <Tooltip text="Notifications"/>
              </TooltipTrigger>
              <DropdownPanel
                className="Channels-dropdownPanel"
                dropdown={Immutable.Map({
                  sections: Immutable.List([
                    Immutable.Map({
                      header: Immutable.Map({
                        secondary: 'Snooze notifications:',
                      }),
                      items: Immutable.List([
                        '20 minutes',
                        '1 hour',
                        '2 hours',
                        '4 hours',
                        '8 hours',
                        '24 hours',
                      ]),
                    }),
                    Immutable.Map({
                      items: Immutable.List([
                        'Do Not Disturb schedule...',
                      ]),
                    }),
                    Immutable.Map({
                      items: Immutable.List([
                        <span>Settings for <strong>#datascience</strong>...</span>,
                        'Your notification preferences...',
                      ]),
                    }),
                  ]),
                })}
              />
            </DropdownTrigger>
          </div>
          <DropdownPanel
            className="Channels-dropdownPanel"
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
    );
  }
}

export default Channels;
