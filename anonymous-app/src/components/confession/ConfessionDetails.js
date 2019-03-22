import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ConfessionDetails = (props) => {
    //const id = props.match.params.id;
    //console.log(props)

    if (!props.auth.uid) return <Redirect to="/signin" />

    if (props.confession) {
        return (
            <div className="confession-list">
                <div>
                    <span>{props.confession.title}</span>
                    <p>{props.confession.content}</p>
                </div>
                <div className="grey">
                    <div>Posted By {props.confession.authorFirstName} {props.confession.authorLastName}</div>
                    <div>{moment(props.confession.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p>Loading confessions...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    const id = ownProps.match.params.id;
    const confessions = state.firestore.data.confessions;
    const confession = confessions ? confessions[id] : null;
    return {
        confession: confession,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'confessions' }
    ])
)(ConfessionDetails);



