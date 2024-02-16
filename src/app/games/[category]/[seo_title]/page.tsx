import React from 'react';
import {ICard} from '@/components/Card/interfaces';
import Card from '@/components/Card';
import {Metadata} from 'next';

interface MetaDataParams {
    params: { seo_title: string }
}

export async function generateStaticParams() {
    const response = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')
    const data = await response.json()

    return data.map((item: ICard) => ({
        seo_title: item.seo_title,
    }))
}

export async function generateMetadata({params}: MetaDataParams): Promise<Metadata> {
    const seoTitle = params.seo_title
    return {title: seoTitle}
}

export default async function Games({params}: GameProps) {
    const data = await getData(params)

    return (
        <div>
            <Card data={data}/>
        </div>
    );
};

async function getData({category, seo_title}: DataParams) {
    const response = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json', {next: {revalidate: 3600}})
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
