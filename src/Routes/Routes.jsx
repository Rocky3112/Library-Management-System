import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Components/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminPanel/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddBook from "../Pages/Dashboard/AdminPanel/AddBook";
import UserHome from "../Pages/Dashboard/UserPanel/UserHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
  
    ],
  },


  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "userhome",
        element: <UserHome></UserHome>
      },
      {
        path: "adminhome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "addbook",
        element: <AdminRoute><AddBook></AddBook></AdminRoute>
      },
      {
        path: "allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      
    ]
  }
  
]);
