import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Categories from '../pages/categorie/Categories';
import News from '../pages/news/News';
import Home from '../pages/shared/Home';


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories/:id',
                element:<Categories></Categories>,
                loader:({params})=>fetch(`http://localhost:4000/categories/${params.id}`)
            },
            {
                path:'news/:id',
                element:<News></News>,
                loader:({params})=>fetch(`http://localhost:4000/news/${params._id}`)
            },
            {
                path:'*',
                element:<div>on the way.......</div>
            }
        ]
    }
]);

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export default Route;