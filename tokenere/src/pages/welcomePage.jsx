import React from "react";
import Logo from "../assets/images/hero.png";
import '../assets/styles/welcome.css';

function index () {
    return (
        <div className="welcome">
        
            <button className="sk">Skip</button>
            <div className="logo">
                <img src= { Logo }  alt="hero" />
            </div>
            <h1 className="tok"> Welcome to Tokenere</h1>
            <div>
                <button className="_Acct">
                    <h2 className="_acct">Open Free Account</h2>
                </button>
                </div>
                <div>
                <button className="Acct">
                    <h2 className="acct">I have an Account</h2>
                </button>
            </div>
        </div>
    );
};

export default index;

