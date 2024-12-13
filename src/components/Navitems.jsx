import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"
// import { logo } from './assets/images/logo/zenixlogo3.png';

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  useEffect(()=>{
   Aos.init({duration:1000})
  },[])

  // add event Listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false)
    }
  })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className='container'>
          <div className="header-top-area">
            <Link to="/sign-up" className='lab-btn me-3'><span className='text-white'>Create Account</span></Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>

      {/* header buttom */}
      <div className='header-buttom'>
        <div className='container'>
          <div className='header-wrapper'>
            <div>
          <h3 className='mt-2'>
            <span>ZENIX STORE</span>
          </h3>
         </div>
            {/* logo section */}
            {/* <div className='logo-search-acte'>
              <div className='logo'>
                <link to={"/"}>
                  <img src={logo} alt="" />
                </link>
              </div>
            </div> */}

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li> <Link to="/home">Home</Link></li>
                  <li> <Link to="/shop">Shop</Link></li>
                  <li> <Link to="/blog">Blog</Link></li>
                  <li> <Link to="/about">About</Link></li>
                  <li> <Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block text-white">Create Account</Link>
              <Link to="/login" className="lab-btn text-white d-none d-md-block">Login</Link>

              {/* menu toggler */}
              <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
              </div>

              {/* social toggler */}
              <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
              <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};



export default Navitems;