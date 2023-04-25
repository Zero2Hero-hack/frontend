import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footerFirst">
                <div className="first_1">
                <p>What's New</p><br/>
                <span> Subscribe to our newsletter to get updates on our latest offers!</span><br />
                <label for="email"></label><input 
                type="email"
                id="email"
                name="emailAddress"
                placeholder="Enter Email for Newsletter"
                ></input>
                <button>Suscribe</button>
                <p> We'll never share your email with a third party </p>
                </div>
                <div className="second_2">
                    <div className="secondCol_1"> 
                        <h2>Company</h2>
                        <h3>About Us</h3>
                        <h3>Team</h3>
                        <h3>Privacy Policy</h3>
                        <h3>Terms & Conditions</h3>
                        <h3>Paternership</h3>
                    </div>
                    <div className="secondCol_2">
                        <h2>Need Help</h2>
                        <h3>Help Center</h3>
                        <h3>Contact Us</h3>
                        <h3>How to Trade</h3>
                        <h3>Submit a dispute</h3>
                        <h3>Report a Product</h3>
                        <h3>Return a Product</h3>
                        <h3>FAQ</h3>
                    </div>
                    <div className="secondCol_3"></div>
                    <div className="secondCol_4"></div>
                    <div className="secondCol_5"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;