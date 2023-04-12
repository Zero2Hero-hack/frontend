import React from "react";
import Group from '../assets/images/Group.png';

function index () {
    return (
        <div className="welcome">
            <h1> TOKENERE </h1>
            <button>Skip</button>
            <div className="img">
                <img scr= {Group} alt="" />
            </div>
            <h1 className="tok"> Welcome to Tokenere</h1>
        </div>
    );
};

export default index;