import React from 'react';

const Games = (props) => {
    console.log(props)
    return (
        <div>

        </div>
    );
};

export const getServerSideProps = async (context) => {
    const {seo_title} = context.params;
    const response = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json');
    const result = await response.json();
    return {
        props: {
            initialState: result
        },
    };
};

export default Games;
