import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
    { path: "/", Component: Home },
    {path:"/contact", Component: Contact},
    {path:"/about",Component: About}
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)