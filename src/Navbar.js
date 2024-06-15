import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";


function Navbar() {
    const [currentPage, setCurrentPage] = useState('Login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Page = (currentPage) => {
        setCurrentPage(currentPage)
        switch (currentPage) {
            case 'Home':
                setCurrentPage(<Home />);
            case 'About':
                setCurrentPage(<About />);
            case 'Contact':
                setCurrentPage(<Contact />);
            default:
                return <LoginForm IsLoggedIn={setIsLoggedIn}
                    setCurrentPage={setCurrentPage}></LoginForm>
        }
    }
    return (
        <div className="nav">
            <ul>
                <li><button onClick={() => Page('Home')}>Home</button></li>
                <li><button onClick={() => Page('About')}>About us</button></li>
                <li><button onClick={() => Page('Contact')}>Contact
                    us</button></li>

            </ul>

        </div>
    )

}
export default Navbar;