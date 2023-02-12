
import React from "react";
import  ReactDOM from "react-dom/client";

import logo from "./assets/42182675.png"






const Header = ()=>{
    return(
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <input placeholder="Search" type="text" />
            <h1>User</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)  // we can also write like Header()