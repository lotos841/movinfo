import React, { useState } from "react";
import './RaitingNavigetion.css';
import {FaFireAlt,FaStar,FaPlusCircle, FaBorderAll} from "react-icons/fa"
import { useContext } from 'react';
import context from "../../Context";
import { NavLink } from "react-router-dom";

function RaitingNavigetion(){

    return(
        <div className="rating-navigetion">
            <div class="rating-section">  
                <NavLink className="rating-name" to="main">{<div className="rating-icon"><FaStar/></div>} высокий рейтинг</NavLink>
            </div>
            <div class="rating-section">
                <NavLink className="rating-name" to="popular">{<div className="rating-icon"><FaFireAlt/></div>} популярные</NavLink>
            </div>
            <div class="rating-section"> 
                <NavLink className="rating-name" to="newfilms">{<div className="rating-icon"><FaPlusCircle/></div>} новые</NavLink>
            </div>
            <div class="rating-section">    
                <NavLink className="rating-name" to="genres">{<div className="rating-icon"><FaBorderAll/></div>} Жанры</NavLink>
            </div>
        </div>
    )
}

export default RaitingNavigetion;