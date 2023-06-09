import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AddToy from "../Pages/Add_A_Toy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoutes from "./PrivetRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Blog from "../Pages/Blog/Blog";
import MyToy from "../Pages/MyToy/MyToy";
import UpdateToy from "../Pages/UpdataeTaoy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/addtoys',
        element: <PrivateRoutes> <AddToy /> </PrivateRoutes>
      },
      {
        path: '/alltoys',
        element:<AllToys />
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes> <ToyDetails /> </PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "/mytoy",
        element: <PrivateRoutes> <MyToy /> </PrivateRoutes>
      },
      {
          path: "myToys/:id",
          element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
          loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  },
]);

export default router;