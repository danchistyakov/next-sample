import React, {FC} from 'react';
import styles from './CardGrid.module.css';
import {CardProps} from "@/components/Games/CardGrid/interfaces";

const CardGrid: FC<CardProps[]> = ({data}) => {
    return (
        <div className={styles.container}>
            {data.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default CardGrid;
