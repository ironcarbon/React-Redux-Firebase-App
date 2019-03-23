import React, { Component } from 'react';
import Notifications from './Notifications';
import ConfessionList from '../confession/ConfessionList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
    render() {
        //const{ confessions, auth } = this.props;
        //console.log(this.props.confessions)
        if (!this.props.auth.uid) return <Redirect to="/signin" />
        return (
            <div className="dashboard">
                <ConfessionList confessions={this.props.confessions} />
                <Notifications notifications={this.props.notifications} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        confessions: state.firestore.ordered.confessions,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'confessions' },
        { collection: 'notifications', limit: 3 }
    ])
)(Dashboard);