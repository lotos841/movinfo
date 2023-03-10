import React from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import {FaHome, FaFilm, FaHeart} from 'react-icons/fa';
import {RiMickeyLine, RiVideoAddLine} from 'react-icons/ri';
import './Burger-menu.css'
import {click} from "@testing-library/user-event/dist/click";
import {isVisible} from "@testing-library/user-event/dist/utils";

const BurgerMenu = () => {

    let menu_value = false;
    React.useEffect(() => {
        document.getElementById('menu-btn').onclick = function () {
            menu_value = !menu_value;
            document.getElementById('burger-menu').style.opacity = Number(menu_value);
        }

    });

    return (
        <div>
            <div className="menu-btn" id="menu-btn">
                <Hamburger direction="right" />
            </div>
            <div className="burger-menu" id="burger-menu">
                <a href="" className="menu-item"><FaHome className="icon"/>Главная</a>
                <a href="" className="menu-item"><FaFilm className="icon"/>Фильмы</a>
                <a href="" className="menu-item"><RiMickeyLine className="icon"/>Мультики</a>
                <a href="" className="menu-item"><RiVideoAddLine className="icon"/>Новинки</a>
                <a href="" className="menu-item"><FaHeart className="icon"/>избранное</a>
            </div>
        </div>
    );


};

export default BurgerMenu;