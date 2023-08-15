import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './components/About';
import Project from './components/Project';
import { Contact } from './components/Contact';

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [{path: 'about', element: <About />}, {path: 'projects', element: <Project/>}, {path: 'contact', element: <Contact/>}]}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
