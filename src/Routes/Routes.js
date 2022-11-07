import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Carousel from '../Pages/Carousel';
import ContactUs from '../Pages/ContactUs';
import EditOrder from '../Pages/EditOrder';
import Feature from '../Pages/Feature';
import Home from '../Pages/Home';
import MyOrders from '../Pages/MyOrders';
import Order from '../Pages/Order';
import Register from '../Pages/Register';
import Login from '../Pages/Shared/Login';
import PrivateRoutes from './PrivateRoutes';


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            children:[
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/home',
                    element: <Home/>,
                    
                },
                {
                    path: '/login',
                    element: <Login/>,
                },
                {
                    path: '/feature',
                    element: <PrivateRoutes><Feature/></PrivateRoutes>,
                },
                {
                    path: '/feature/:id',
                    element: <PrivateRoutes><Order/></PrivateRoutes>,
                    loader: ({params})=> fetch(`https://clean-me-server-jubayer44.vercel.app/feature/${params.id}`)
                },
                {
                    path: '/contact',
                    element: <ContactUs/>,
                },
                {
                    path: '/register',
                    element: <Register/>
                },
                {
                    path: '/blog',
                    element: <Carousel/>,
                },
                {
                    path: '/myorders',
                    element: <PrivateRoutes><MyOrders/></PrivateRoutes>
                },
                {
                    path: '/myOrders/:id',
                    element: <PrivateRoutes><EditOrder/></PrivateRoutes>,
                }
                
            ]
        },
        
    ]);


export default router;