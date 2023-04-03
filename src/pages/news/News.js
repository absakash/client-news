import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const n=useLoaderData();
    console.log(n);
    return (
        <div>
            this is the news {n.length}
        </div>
    );
};

export default News;