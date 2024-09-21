import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom'
import HomePage from './HomePage/HomPage.jsx';
import CountryDetails from './CountryDetails/CountryDetails.jsx';
import RouterError from './RouterError/RouterError.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


const router = createBrowserRouter([


    { 
      path: "/",
      element: <App />,
      errorElement: <RouterError />, // if an error occurs, render this component
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:CountryDetails",   // this is a dynamic route that will match any path that starts with / and has a country name after it
          element: <CountryDetails />,

        }
      ]
  
    },
  ]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
