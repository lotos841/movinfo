import React, {useState} from 'react';
import Logo from "../UI/Logo/Logo";
import SearchBox from "../UI/Search-box/Search-box";
import "./Navbar.css";
import BurgerMenu from "../UI/Burger-menu/Burger-menu";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="burger-and-logo">
                <Logo/>
            </div> 
        </div>
    );
};

export default Navbar;