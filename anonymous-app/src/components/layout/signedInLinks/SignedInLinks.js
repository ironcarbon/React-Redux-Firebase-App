import React from 'react';
import { NavLink } from 'react-router-dom';



const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">New Confession</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/">IC</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;