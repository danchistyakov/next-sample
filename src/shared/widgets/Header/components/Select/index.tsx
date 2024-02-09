'use client'

import React, { FC } from 'react';
import styles from './Select.module.css';
import useSelect from './useSelect';
import { menuItems } from './utils';

const Select: FC = () => {
    const { buttonRef, isOpen, handleButtonClick, handleItemClick, menuRef, selectedItem, setIsOpen } = useSelect();


    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleButtonClick} ref={buttonRef}>{selectedItem}</button>
            {isOpen && (
                <ul ref={menuRef} className={styles.dropdown}>
                    {menuItems.map(item => (
                        <li className={styles.item} onClick={() => handleItemClick(item)}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
