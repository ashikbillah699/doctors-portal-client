import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
    {
        Path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
])

export default router;