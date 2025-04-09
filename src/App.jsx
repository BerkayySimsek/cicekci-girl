
import {Outlet, Route, Routes} from "react-router";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./pages/About.jsx";
import Details from "./pages/Details.jsx";
import NotFound from "./pages/NotFound.jsx";
import ContactPage from "./pages/ContactPage.jsx";



function App() {


    return (
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/cicek/:id" element={<Details/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App