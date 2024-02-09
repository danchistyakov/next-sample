import React, { FC } from 'react';
import styles from './Card.module.css';
import { CardProps } from "./interfaces";
import Image from "next/image";
import Category from './components/Category';

const Card: FC<CardProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <Image width={408} height={250} src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${data.identifier}.webp`} alt={data.title} />
            <p>{data.title}</p>
            <p>{data.provider}</p>
            {data.categories.map(item => (
                <Category data={item} />
            ))}
        </div>
    );
};

export default Card;
