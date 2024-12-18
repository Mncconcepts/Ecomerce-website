import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navitems from "./components/Navitems";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (profile) => {
    setUser(profile); // Set user profile upon login
  };
  return (
    <>
      <Navitems user={user} />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;