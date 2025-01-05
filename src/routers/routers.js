import { lazy } from 'react';


const routers = [
    {
        path:'/',
        components:lazy(()=>import('@Components/HomePage/HomePage.jsx'))
    },
    {
        path:'/blog',
        components:lazy(()=>import('@Components/Blog/Blog.jsx'))
    },
]

export default routers;