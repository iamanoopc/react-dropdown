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
            <TooltipTrigger
              type={TooltipTypes.NOTIFICATION_BUTTON}
            >
              <button
                className="Channels-notificationButton"
                type="button"
              >
                <i className={classNames('Channels-notificationIcon', 'fa', 'fa-bell-o')}/>
              </button>
              <Tooltip text="Notifications"/>
            </TooltipTrigger>
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
