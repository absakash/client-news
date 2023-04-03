import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categorieshow from '../categoriesshow/Categorieshow';

const Categories = () => {
    const magi=useLoaderData()
    console.log(magi)
    return (
        <div>
            <h3> this categories has {magi.length} news</h3>
            {
                magi.map(m=><Categorieshow key={m._id} m={m}></Categorieshow>)
            }
        </div>
    );
};

export default Categories;