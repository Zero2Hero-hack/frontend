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
                <div>
                <label for="email"></label><input 
                type="email"
                id="email"
                name="emailAddress"
                placeholder="Enter Email for Newsletter"
                ></input>
                <button>Suscribe</button>
                <p> We'll never share your email with a third party </p>
                </div>
                </div>
                <div className="footerFirst_img">
                    <img src="" alt="Not found" />
                </div>
                </div>
        {/* --------------------------   SECOND SECTION -------------------------------------- */}
                <div className="second_2">
                    <div className="secondCol_1">
                        <div> 
                        <span>Company</span>
                        <h4>About Us</h4>
                        <h4>Team</h4>
                        <h4>Privacy Policy</h4>
                        <h4>Terms & Conditions</h4>
                        <h4>Paternership</h4>
                        </div>
                    </div>
                    <div className="secondCol_2">
                        <div>
                        <span>Need Help</span>
                        <h4>Help Center</h4>
                        <h4>Contact Us</h4>
                        <h4>How to Trade</h4>
                        <h4>Submit a dispute</h4>
                        <h4>Report a Product</h4>
                        <h4>Return a Product</h4>
                        <h4>FAQs</h4>
                        </div>
                    </div>
                    <div className="secondCol_3">
                        <div>
                        <span> Business Services</span>
                        <h4> Trade Assurance</h4>
                        <h4> Product Testing</h4>
                        <h4> On-Site Verification</h4>
                        <h4> Certification</h4>
                        <h4> Logistics Services</h4>
                        </div>
                    </div>
                    <div className="secondCol_4">
                        <span> Buy on Business</span>
                        <h4> Register as a buyer</h4>
                        <h4> All Categories</h4>
                        <h4> How to buy</h4>
                    </div>
                    <div className="secondCol_5">
                        <span> Sell on Business</span>
                        <h4> Register as a seller</h4>
                        <h4> How to sell</h4>
                    </div>
                </div>
                <hr />
                <div>
                    <span> Join Us </span>

                    <span> Payment Methods</span>

                    <span> Delivery Partners</span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;