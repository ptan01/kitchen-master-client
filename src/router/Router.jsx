import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/Main";
import Home from "../pages/home/home/Home";
import Blog from "../pages/blog/Blog";
import ChefRecipe from "../pages/chef/chefRecipe/ChefRecipe";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivetRoute from "../privetRoute_Provider/PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivetRoute><ChefRecipe></ChefRecipe></PrivetRoute>,
                loader: ({params})=> fetch(`https://the-chef-recipe-server-ptan01.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
         
        ]
    }
])

export default router ;