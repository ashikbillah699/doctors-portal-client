import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import AppoinmentPage from "../../Pages/AppoinmentPage/AppoinmentPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

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
                path: '/appointment',
                element: <AppoinmentPage></AppoinmentPage>
            }
        ]
    },
])

export default router;