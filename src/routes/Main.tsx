import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Players } from "../pages/Players";
import { Add } from "../pages/Add";
import { Edit } from "../pages/Edit";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Players />,
        errorElement: <NotFound />
    },
    {
        path: "/add",
        element: <Add />,
        errorElement: <NotFound />
    },
    {
        path: "/edit/:id",
        element: <Edit />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


