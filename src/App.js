import React, { useState } from "react";
import "./App.css"
import Success from "./Success";
import LoginForm from "./LoginForm";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('Login');
  return (
    <div>
      {isLoggedIn ? (
        <Success />
      ) : (
        <LoginForm onLogin={setIsLoggedIn} />
      )}

    </div>

  );
};
export default App;