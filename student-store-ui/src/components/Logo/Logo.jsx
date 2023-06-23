import "./Logo.css"
import React from "react";
import {Link} from "react-router-dom";

export default function Logo(){
    return(
        <div className="Logo">
            <Link to={"/"}>
                    <img className="logo-img" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" alt="codepath-logo" width="50" height="70"></img>
            </Link>
        </div>
    )
}