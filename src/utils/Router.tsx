import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Projects } from "../components/Projects/Projects";
import { Tasks } from "../components/Tasks/Tasks";
import { Registration } from "../components/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Projects />
            }, 
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: ":id",
                element: <Tasks />
            }
        ]
    },
]);