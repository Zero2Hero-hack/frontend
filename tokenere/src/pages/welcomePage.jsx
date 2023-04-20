import React from "react";
import Logo from "../assets/images/hero.png";
import '../assets/styles/welcome.css';

function index () {
    return (
              /* Navigation Bar */
      <div className="welcome">
        <nav className="homeNav">
          <div className="logo">LOGO</div>
          <div className="sign">
            <button className="signIn">Sign in</button>
            <button className="signUp">Sign up</button>
          </div>
        </nav>
               {/* Hero Section */}
        <div className="hero">
        <div className="col-1">
          <img src={Logo} alt="logo" />
          <h1 className="tok"> Welcome to Tokenere</h1>
        </div>
        <div className="col-2">
          <form>
            <div className="email-input">
              <label for="email">Email</label>
              <input
                type="text"
                id="text"
                name="emailAddress"
                placeholder="Enter your email"
                //   onChange={formOnChange}
                //   value={emailAddress}
              ></input>
            </div>
            <div className="pass-input">
              <label for="email">Password</label>
              <input
                type="text"
                id="text"
                name="password"
                placeholder="Password"
                //   onChange={formOnChange}
                //   value={emailAddress}
              ></input>
              </div>

              <div className="sign-btn">
                <button> Sign In</button>
              </div>
            </form> 
            </div>
        </div>
        {/* END OF HERO SECTION */}
      </div>
    );
};

export default index;

