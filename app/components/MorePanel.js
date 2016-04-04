import './MorePanel.scss';
import classNames from 'classnames';
import DropdownPanel from './DropdownPanel';
import Immutable from 'immutable';
import React from 'react';

class MorePanel extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <DropdownPanel
        className={classNames('MorePanel', className)}
        dropdown={Immutable.Map({
          sections: Immutable.List([
            Immutable.Map({
              items: Immutable.List([
                <span>
                  <i
                    className={classNames(
                      'MorePanel-icon',
                      'MorePanel-icon--yourFiles',
                      'fa',
                      'fa-file-o'
                    )}
                  />
                  Your Files
                </span>,
                <span>
                  <i
                    className={classNames(
                      'MorePanel-icon',
                      'MorePanel-icon--allFiles',
                      'fa',
                      'fa-files-o'
                    )}
                  />
                  All Files
                </span>,
                <span>
                  <i
                    className={classNames(
                      'MorePanel-icon',
                      'MorePanel-icon--teamDirectory',
                      'fa',
                      'fa-user'
                    )}
                  />
                  Team Directory
                </span>,
                <span>
                  <i
                    className={classNames(
                      'MorePanel-icon',
                      'MorePanel-icon--help',
                      'fa',
                      'fa-question-circle'
                    )}
                  />
                  Help
                </span>,
                <span>
                  <i
                    className={classNames(
                      'MorePanel-icon',
                      'MorePanel-icon--whatsNew',
                      'fa',
                      'fa-gift'
                    )}
                  />
                  What's New
                </span>,
              ]),
            }),
          ]),
        })}
      />
    );
  }
}

export default MorePanel;
