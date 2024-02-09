import React, { FC } from 'react';
import styles from './Categories.module.css';
import { CategoryProps } from "./interfaces";
import Image from "next/image";

const Categories: FC<CategoryProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <h3>Категории:</h3>
            <div className={styles.categories}>
                {data.map(item => (
                    <div className={styles.category}>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
