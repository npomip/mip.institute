import React, { useState } from 'react';

import styles from '@/styles/components/dropdownMenu/DropdownMenu.module.sass';

type DropdownMenuProps = {
  icon: React.ReactNode;
  menuItems: string[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ icon, menuItems }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownMenu} onMouseEnter={handleMenuToggle} onMouseLeave={handleMenuToggle}>
      <div className={styles.icon} >
        {icon}
      </div>
      {isOpen && (
        <ul className={styles.menu} >
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <p className={styles.text}>{item}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;