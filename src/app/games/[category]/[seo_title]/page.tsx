import React from 'react';
import Image from "next/image";
import { ICard } from '@/components/Card/interfaces';
import Card from '@/components/Card';

export default async function Games({ params }: GameProps) {
    console.log(params)
    const data = await getData(params)

    return (
        <div>
            <Card data={data} />
        </div>
    );
};

async function getData({ category, seo_title }: DataParams) {
    console.log(seo_title)
    const response = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await response.json();
    const result = data.filter((item: ICard) => item.provider === category || item.categories.includes(category)).filter((item: ICard) => item.seo_title === seo_title)[0];
    return result
}

interface GameProps {
    params: DataParams
}


interface DataParams {
    category: string;
    seo_title: string;
}