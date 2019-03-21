import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';



const SignedInLinks = (props) => {
    console.log(props);
    return (
        <ul className="right">
            <li><NavLink to="/create">New Confession</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/">IC</NavLink></li>
        </ul>
    )
}

// const mapStateToProps = (state) => {

//     return {

//     }
// }

export default connect(null, { signOut })(SignedInLinks);