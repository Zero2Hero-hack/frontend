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
                type="email"
                id="text"
                name="emailAddress"
                placeholder="Enter your email"
                //   onChange={formOnChange}
                //   value={emailAddress}
              ></input>
            </div>
            <div className="pass-input">
              <label for="password">Password</label>
              <input
                type="password"
                id="text"
                name="password"
                placeholder="Password"
                min={6}
                max={20}
                //   onChange={formOnChange}
                //   value={emailAddress}
              ></input>
                <span className="fgt-pswd"> Forgot Password?</span>
                <button><span>Sign In</span> </button>
                <p className="acct"> Don't have an account? <span className="_acct"> Create One </span> </p>
              </div>
            </form> 
            </div>  
        </div>
        {/* END OF HERO SECTION */}
      </div>
    );
};

export default index;

