import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorElement';
import PetList from './components/PetList';
import NewPetForm from './components/NewPetForm';
import NavBar from './components/NavBar';
import Header from './components/Header';
import PetProfile from './components/PetProfile';
import ExampleComponent from './components/ExampleComponent';

// Create router. Defines paths, element that renders, error page.
const router = createBrowserRouter([
    {
        // path is window.location.pathname
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        // add child to App route
        // we can pass data from parent element to child element
        children: [
           {
            path:"/",
            element: <PetList/>
           },
           {
            path:"/add_pet",
            element:<NewPetForm/>
           },
           {
            // we need dynamic path to access individual elements by id
            // info after colon becomes parameter
            // use params allows us to access unique url endpoint 
            path: `/pets/:id`,
            element: <PetProfile/>
           }
        ]
    },
    // {
    //     path:"/pets",
    //     element: <div>
    //             <NavBar/>
    //             <Header/>
    //          <h1>here is pet list</h1>
    //         </div>
    // },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
// RouterProvider component gives us router functionality for rendering 
// elements according to path
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();