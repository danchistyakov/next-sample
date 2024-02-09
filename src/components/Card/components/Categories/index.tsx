import React, { FC } from 'react';
import styles from './Categories.module.css';
import { CategoryProps } from "./interfaces";
import Image from "next/image";

const Categories: FC<CategoryProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <h3>Категории:</h3>
            <div className={styles.categories}>
                {data.map((item, key) => (
                    <div className={styles.category} key={key}>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
