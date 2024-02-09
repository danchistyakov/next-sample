import React from 'react';
import Image from "next/image";
import Card from '@/components/Card';

export default async function Games({ params }) {
    const data = await getData(params)
    console.log(`https://d2norla3tyc4cn.cloudfront.net/i/s3/[${data.identifier}].webp`)

    return (
        <div>
            <Card data={data} />
        </div>
    );
};

async function getData({ seo_title }) {
    console.log(seo_title)
    const response = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await response.json();
    const result = data.filter(item => item.seo_title === seo_title)[0];
    return result
}
