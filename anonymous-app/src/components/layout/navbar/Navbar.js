import React from 'react';
import { Link } from 'react-router-dom';
import layout from '../layout.css';
import SignedInLinks from '../signedInLinks/SignedInLinks';
import SignedOutLinks from '../signedOutLinks/SignedOutLinks';
import { connect } from 'react-redux';



const Navbar = (props) => {
    // const { auth } = props;
    //console.log(props.auth)
    const links = props.auth.uid ? <SignedInLinks profile={props.profile} /> : <SignedOutLinks />

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="brand-logo">Anonymous</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);