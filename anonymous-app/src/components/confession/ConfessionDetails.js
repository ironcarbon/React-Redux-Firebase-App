import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ConfessionDetails = (props) => {
    const id = props.match.params.id;
    //console.log(props)
    if (props.confession) {
        return (
            <div className="confession-list">
                <div>
                    <span>{props.confession.title}</span>
                    <p>{props.confession.content}</p>
                </div>
                <div className="grey">
                    <div>Posted By {props.confession.authorFirstName} {props.confession.authorLastName}</div>
                    <div>18th March, 1pm</div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p>Loading project...</p>
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
        confession: confession
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'confessions' }
    ])
)(ConfessionDetails);



