import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import SharedLayout from './Layout/SharedLayout';
import Details from './Home/Projects/Details';
import Contact from './Home/Contact/Contact';
import ThemeProvider from './Provider/ThemeProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout></SharedLayout>,
    children: [
      {
        path: '/',
        element: <MainLayout></MainLayout>,
      },
      {
        path: '/projects/:id',
        element: <Details></Details>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
