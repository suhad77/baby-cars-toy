import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AddToy from "../Pages/Add_A_Toy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
        {
          path:'/addtoys',
          element:<AddToy / >
        }
      ]
    },
  ]);
  
  export default router;