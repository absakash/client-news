import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftside = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h4>categories : {categories.length} </h4>
            {
                categories.map(categorie=><p key={categorie.id}>
                    <Link to={`categories/${categorie.id}`}>{categorie.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Leftside;