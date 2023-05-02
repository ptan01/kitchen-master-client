import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/Main";
import Home from "../pages/home/home/Home";
import Blog from "../pages/blog/Blog";
import ChefRecipe from "../pages/chef/chefRecipe/ChefRecipe";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://the-chef-recipe-server-ptan01.vercel.app/chefs')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/recipe/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params})=> fetch(`https://the-chef-recipe-server-ptan01.vercel.app/chefs/${params.id}`)
            }
         
        ]
    }
])

export default router ;