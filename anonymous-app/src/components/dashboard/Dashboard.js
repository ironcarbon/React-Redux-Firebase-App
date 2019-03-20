import React, { Component } from 'react';
import Notifications from './Notifications';
import ConfessionList from '../confession/ConfessionList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        //console.log(this.props.confessions)

        return (
            <div className="dashboard">
                <ConfessionList confessions={this.props.confessions} />
                <Notifications />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        confessions: state.firestore.ordered.confessions
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'confessions' }
    ])
)(Dashboard);