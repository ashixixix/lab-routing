import React, { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import LoginForm from "./LoginForm";

const Success = () => {
    const [currentPage, setCurrentPage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const Page = (currentPage) => {
    //     setCurrentPage(currentPage)
    //     switch (currentPage) {
    //         case 'Home':
    //             setCurrentPage(<Home />);
    //         case 'About':
    //             setCurrentPage(<About />);
    //         case 'Contact':
    //             setCurrentPage(<Contact />);
    //         default:
    //             return <LoginForm IsLoggedIn={setIsLoggedIn}
    //                 currentPage={setCurrentPage}></LoginForm>
    //     }
    // }
    return (
        <div className="loginSuccess">
            {/* Navbar */}
            <BrowserRouter>

                <div className="nav">
                    <ul>
                        <NavLink to="/home" className="homeBtn">Home</NavLink>
                        <NavLink to="/about" className="aboutBtn">About Us</NavLink>
                        <NavLink to="/contact" className="contactBtn">Contact Us</NavLink>
                    </ul>
                    <Routes>
                        <Route exact path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

            </BrowserRouter>
            <div className="successTxt">
                <h1>Congrats!</h1>
                <h3>You have successfully logged in!</h3>
            </div>

        </div>

    );
}
export default Success;