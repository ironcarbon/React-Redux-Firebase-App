import React, { Component } from 'react';
import Notifications from './Notifications';
import ConfessionList from '../confession/ConfessionList';
import dashboard from './dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">

                <ConfessionList />


                <Notifications />


            </div>
        )
    }
}

export default Dashboard;