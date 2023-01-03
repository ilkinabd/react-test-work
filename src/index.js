import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./routes/home";
import CreateLink from "./routes/create";

import './index.css'
const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/create",
        element: <CreateLink/>,
    },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
