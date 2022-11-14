import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import AppoinmentPage from "../../Pages/AppoinmentPage/AppoinmentPage";
import Home from "../../Pages/Home/Home";

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
                path: '/appointment',
                element: <AppoinmentPage></AppoinmentPage>
            }
        ]
    },
])

export default router;