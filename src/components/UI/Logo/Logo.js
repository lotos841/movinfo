import React from 'react'
import { Link } from 'react-router-dom';
import './Logo.css'

function Logo(){
    return(
        <Link to="/main" className="logo">MOVINFO</Link>
    )
}

export default Logo;