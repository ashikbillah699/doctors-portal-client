import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import AppoinmentPage from "../../Pages/AppoinmentPage/AppoinmentPage";
import Desbord from "../../Pages/Desbord/Desbord";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        Path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <AppoinmentPage></AppoinmentPage>
            }
        ]
    },
    {
        path: '/desbord',
        element: <PrivateRoute><Desbord></Desbord></PrivateRoute>
    }
])

export default router;