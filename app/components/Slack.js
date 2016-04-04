import './Slack.scss';
import Channels from './Channels';
import classNames from 'classnames';
import Messages from './Messages';
import React from 'react';

class Slack extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames('Slack', className)}>
        <Channels className="Slack-channels"/>
        <Messages className="Slack-messages"/>
      </div>
    );
  }
}

export default Slack;
