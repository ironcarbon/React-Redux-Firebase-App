import React, { Component } from 'react';
import Notifications from './Notifications';
import ConfessionList from '../confession/ConfessionList';
import { connect } from 'react-redux';


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
    return {
        confessions: state.confession.confessions
    }
}

export default connect(mapStateToProps)(Dashboard);