import React from 'react';
import { NavLink } from 'react-router-dom';
import layout from '../layout.css';


const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Signup</NavLink></li>
            <li><NavLink to="/">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;