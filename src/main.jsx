import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import Featured from './Components/Featured/Featured';
import { jobCategoryAndFeatureData } from './Loaders/jobCategoryAndFeatureData';
import JobDetails from './Components/JobDetails/JobDetails';
import Blog from './Components/Blog/Blog';
import Statistic from './Components/Statistic/Statistic';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import ErrorPage from './Components/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: jobCategoryAndFeatureData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <JobDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
      {
        path: "/applied",
        element: <AppliedJob />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
