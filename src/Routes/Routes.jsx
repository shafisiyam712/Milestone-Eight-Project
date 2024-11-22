import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import Home from "../Pages/Home";
// import GadgetsCard from "../Components/GadgetsCard";
import Gadgets from "../Components/Gadgets";
import GadgetDetails from "../Pages/GadgetDetails";
import ErrorPage from "../Pages/ErrorPage";
import Cart from "../Components/cart";
import Wishlist from "../Components/Wishlist";

const routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
               // loader: ()=>fetch('../data.json'),
               loader: ()=>fetch('../categories.json'),
                children: [
                  {
                    path: '/',
                    element: <Gadgets></Gadgets>,
                    loader: ()=>fetch('../data.json'),
                  },
                  {
                    path: '/category/:category',
                    element: <Gadgets></Gadgets>,
                    loader: ()=>fetch('../data.json'),
                  },
                  {
                    path: '/category/smart%20watches',
                    // eslint-disable-next-line react/jsx-no-undef
                    element:<Gadgets></Gadgets>,
                  },
                 
                ]
            },
              {
                path: '/statistics',
                element: <Statistics></Statistics>,
                
              },
              {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                  {
                    index: true, 
                    element: <Cart></Cart> 
                },
                  {
                    path: 'cart',
                    element:<Cart></Cart>
                  },
                  {
                    path: 'wishlist',
                    element:<Wishlist></Wishlist>
                  },
                  
                ]
              },
              {
                path: '/about',
                element: <About></About>,
               
              },
              {
                path: '/data/:product_id',
                element: <GadgetDetails></GadgetDetails>,
                loader: ()=>fetch('../data.json'),
              },
        ]
    }
   
])
export {routes}