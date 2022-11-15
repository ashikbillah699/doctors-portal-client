import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import AppoinmentPage from "../../Pages/AppoinmentPage/AppoinmentPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
])

export default router;