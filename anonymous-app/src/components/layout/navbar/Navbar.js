import React from 'react';
import { Link } from 'react-router-dom';
import layout from '../layout.css';
import SignedInLinks from '../signedInLinks/SignedInLinks';
import SignedOutLinks from '../signedOutLinks/SignedOutLinks';
import { connect } from 'react-redux';



const Navbar = (props) => {
    const { auth } = props;

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

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);