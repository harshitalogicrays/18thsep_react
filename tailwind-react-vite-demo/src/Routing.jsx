import { createBrowserRouter } from "react-router";
import App from "./App";
import Header from "./features/Header";
import Home from "./features/Home";
import Login from "./features/Login";
import Register from "./features/Register";
import About from "./features/About";
import Products from "./features/Products";

const Routing =  createBrowserRouter([
    {path:'/', element:<App/> ,
        children:[
            {element:<Header/> , 
                children:[
                    {index:true , element:<Home/>},
                    {path:'about',element:<About/>},
                    {path:'products',element:<Products/>},
                ]
            } ,
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
        ]
    }
])
export default Routing