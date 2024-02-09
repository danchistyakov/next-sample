import React, { FC } from 'react';
import styles from './Card.module.css';
import { CardProps } from "./interfaces";
import Image from "next/image";
import Categories from './components/Categories';

const Card: FC<CardProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <Image className={styles.cover} width={250} height={250} src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${data.identifier}.webp`} alt={data.title} />
            <h1 className={styles.title}>{data.title}</h1>
            <h2 className={styles.provider}>{data.provider}</h2>
            <Categories data={data.categories} />
        </div>
    );
};

export default Card;
