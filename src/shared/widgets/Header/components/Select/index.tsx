'use client'

import React, { FC } from 'react';
import styles from './Select.module.css';
import useSelect from './useSelect';
import { menuItems } from './utils';
import Image from "next/image";

const Select: FC = () => {
    const { buttonRef, isOpen, handleButtonClick, handleItemClick, menuRef, selectedItem } = useSelect();


    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleButtonClick} ref={buttonRef}>{selectedItem}</button>
            {isOpen && (
                <div ref={menuRef} className={styles.dropdown}>
                    {menuItems.map((item, key) => (
                        <div className={styles.item} key={key} onClick={() => handleItemClick(item)}>
                            <p>{item}</p>
                            <Image
                                priority
                                src="/icons/ArrowRight.svg"
                                height={12}
                                width={12}
                                alt="Follow us on Twitter"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
