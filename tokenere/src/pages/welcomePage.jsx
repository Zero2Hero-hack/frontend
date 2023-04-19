import React from "react";
import Logo from "../assets/images/hero.png";
import '../assets/styles/welcome.css';

function index () {
    return (
      <div className="welcome">
        <nav className="homeNav">
          <div className="logo">LOGO</div>
          <div className="sign">
            <button className="signIn">Sign in</button>
            <button className="signUp">Sign up</button>
          </div>
        </nav>
        <div className="hero">
          <img src={Logo} alt="hero" />
          <h1 className="tok"> Welcome to Tokenere</h1>
        </div>
        <div>
          <form>
            <div className="col-2">
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
              <label for="email">Password</label>
              <input
                type="text"
                id="text"
                name="password"
                placeholder="password"
                //   onChange={formOnChange}
                //   value={emailAddress}
              ></input>
            <div className="edit-btn">
              <button> Sign In</button>
            </div>
            </div>
          </form>
          

        </div>
      </div>
    );
};

export default index;

