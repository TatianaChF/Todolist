import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Projects } from "../components/Projects/Projects";
import { Tasks } from "../components/Tasks/Tasks";

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
                path: ":id",
                element: <Tasks />
            }
        ]
    },
]);