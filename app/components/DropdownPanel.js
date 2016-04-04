import classNames from 'classnames';
import React from 'react';
import styles from './DropdownPanel.scss';

class DropdownPanel extends React.Component {
  render() {
    const { className, dropdown } = this.props;
    return (
      <div className={classNames(styles.panel, className)}>
        {dropdown.get('sections').map((section, sectionIndex) => {
          const header = section.get('header');

          return (
            <div
              className={styles.menuSection}
              key={sectionIndex}
            >
              {header && <div className={styles.menuHeader}>
                <div className={styles.menuHeaderPrimary}>
                  {header.get('primary')}
                </div>
                <div className={styles.menuHeaderSecondary}>
                  {header.get('secondary')}
                </div>
              </div>}
              {section.get('items').map((item, itemIndex) => {
                return (
                  <a
                    className={styles.menuItem}
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
