import React from 'react';
import { Link } from 'react-router-dom';
import layout from '../layout.css';
import SignedInLinks from '../signedInLinks/SignedInLinks';
import SignedOutLinks from '../signedOutLinks/SignedOutLinks';



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="brand-logo">Anonymous</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;