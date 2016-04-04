import './Messages.scss';
import classNames from 'classnames';
import DropdownPanel from './DropdownPanel';
import DropdownTrigger from '../containers/DropdownTrigger';
import DropdownTypes from '../constants/DropdownTypes';
import Immutable from 'immutable';
import MorePanel from './MorePanel';
import React from 'react';
import SearchPanel from './SearchPanel';
import Tooltip from './Tooltip';
import TooltipTrigger from '../containers/TooltipTrigger';
import TooltipTypes from '../constants/TooltipTypes';

class Messages extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames('Messages', className)}>
        <div className="Messages-header">
          <div className="Messages-channelInfo">
            <div className="Messages-channelName">
              #test
            </div>
            <TooltipTrigger
              type={TooltipTypes.CHANNEL_MEMBERS}
            >
              <div className="Messages-channelMembers">
                1 member
              </div>
              <Tooltip text="View member list (1/1 online)"/>
            </TooltipTrigger>
          </div>
          <div className="Messages-channelActions">
            <TooltipTrigger
              type={TooltipTypes.CHANNEL_CALL}
            >
              <button
                className="Messages-channelAction"
                type="button"
              >
                <i
                  className={classNames(
                    'Messages-channelActionIcon',
                    'Messages-channelActionIcon--secondary',
                    'fa',
                    'fa-phone'
                  )}
                />
              </button>
              <Tooltip text="Start a call in this channel"/>
            </TooltipTrigger>
            <DropdownTrigger
              activeClassName="Messages-channelAction--active"
              type={DropdownTypes.CHANNEL_SETTINGS}
            >
              <TooltipTrigger
                type={TooltipTypes.CHANNEL_SETTINGS}
              >
                <button
                  className="Messages-channelAction"
                  type="button"
                >
                  <i
                    className={classNames(
                      'Messages-channelActionIcon',
                      'Messages-channelActionIcon--secondary',
                      'fa',
                      'fa-gear'
                    )}
                  />
                </button>
                <Tooltip text="Channel Settings"/>
              </TooltipTrigger>
              <DropdownPanel
                className="Messages-dropdownPanel"
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
                className="Messages-channelAction"
                type="button"
              >
                <i
                  className={classNames(
                    'Messages-channelActionIcon',
                    'Messages-channelActionIcon--secondary',
                    'fa',
                    'fa-list-alt'
                  )}
                />
              </button>
              <Tooltip text="Show Channel Details"/>
            </TooltipTrigger>
            <div className="Messages-channelActionDivider"/>
            <div className="Messages-search">
              <DropdownTrigger
                activeClassName="Messages-searchInputContainer--active"
                attachment="top right"
                targetAttachment="bottom right"
                type={DropdownTypes.SEARCH}
              >
                <div className="Messages-searchInputContainer">
                  <input
                    className="Messages-searchInput"
                    placeholder="Search"
                    type="text"
                  />
                  <i className={classNames('Messages-searchIcon', 'fa', 'fa-search')}/>
                </div>
                <SearchPanel/>
              </DropdownTrigger>
            </div>
            <TooltipTrigger
              type={TooltipTypes.ACTIVITY}
            >
              <button
                className="Messages-channelAction"
                type="button"
              >
                <i className={classNames('Messages-channelActionIcon', 'fa', 'fa-comment-o')}/>
              </button>
              <Tooltip text="Show Activity"/>
            </TooltipTrigger>
            <TooltipTrigger
              type={TooltipTypes.STARRED}
            >
              <button
                className="Messages-channelAction"
                type="button"
              >
                <i className={classNames('Messages-channelActionIcon', 'fa', 'fa-star-o')}/>
              </button>
              <Tooltip text="Show Starred Items"/>
            </TooltipTrigger>
            <DropdownTrigger
              activeClassName="Messages-channelAction--active"
              attachment="top right"
              targetAttachment="bottom right"
              type={DropdownTypes.MORE}
            >
              <TooltipTrigger
                type={TooltipTypes.MORE}
              >
                <button
                  className="Messages-channelAction"
                  type="button"
                >
                  <i className={classNames('Messages-channelActionIcon', 'fa', 'fa-ellipsis-v')}/>
                </button>
                <Tooltip text="More Items"/>
              </TooltipTrigger>
              <MorePanel/>
            </DropdownTrigger>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
