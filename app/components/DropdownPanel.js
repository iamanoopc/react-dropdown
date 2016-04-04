import './DropdownPanel.scss';
import classNames from 'classnames';
import React from 'react';

class DropdownPanel extends React.Component {
  render() {
    const { className, dropdown } = this.props;
    return (
      <div className={classNames('DropdownPanel', className)}>
        {dropdown.get('sections').map((section, sectionIndex) => {
          const header = section.get('header');

          return (
            <div
              className="DropdownPanel-menuSection"
              key={sectionIndex}
            >
              {header && <div className="DropdownPanel-menuHeader">
                <div className="DropdownPanel-menuHeaderPrimary">
                  {header.get('primary')}
                </div>
                <div className="DropdownPanel-menuHeaderSecondary">
                  {header.get('secondary')}
                </div>
              </div>}
              {section.get('items').map((item, itemIndex) => {
                return (
                  <a
                    className="DropdownPanel-menuItem"
                    href="#"
                    key={itemIndex}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DropdownPanel;
