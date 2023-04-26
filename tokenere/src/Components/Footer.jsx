import React from "react";
import '../assets/styles/footer.css';

function Footer() {
    return (
        // --------------------------- FIRST SECTION ----------------------------------------//
        <footer>
            <div className="footer">
                <div className="first_1">
                    <div className="firstCol_2">
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
                <div className="first_img">
                    <img src="" alt="Not found" />
                </div>
                </div>
        {/* --------------------------   SECOND SECTION -------------------------------------- */}
                <div className="second_2">
                    <div className="secondCol_1">
                        <div> 
                        <h2>Company</h2>
                        <h3>About Us</h3>
                        <h3>Team</h3>
                        <h3>Privacy Policy</h3>
                        <h3>Terms & Conditions</h3>
                        <h3>Paternership</h3>
                        </div>
                    </div>
                    <div className="secondCol_2">
                        <div>
                        <h2>Need Help</h2>
                        <h3>Help Center</h3>
                        <h3>Contact Us</h3>
                        <h3>How to Trade</h3>
                        <h3>Submit a dispute</h3>
                        <h3>Report a Product</h3>
                        <h3>Return a Product</h3>
                        <h3>FAQs</h3>
                        </div>
                    </div>
                    <div className="secondCol_3">
                        <div>
                        <h2> Business Services</h2>
                        <h3> Trade Assurance</h3>
                        <h3> Product Testing</h3>
                        <h3> On-Site Verification</h3>
                        <h3> Certification</h3>
                        <h3> Logistics Services</h3>
                        </div>
                    </div>
                    <div className="secondCol_4">
                        <h2> Buy on Business</h2>
                        <h3> Register as a buyer</h3>
                        <h3> All Categories</h3>
                        <h3> How to buy</h3>
                    </div>
                    <div className="secondCol_5">
                        <h2> Sell on Business</h2>
                        <h3> Register as a seller</h3>
                        <h3> How to sell</h3>
                    </div>
                </div>
                <hr />
            </div>
        </footer>
    );
};

export default Footer;