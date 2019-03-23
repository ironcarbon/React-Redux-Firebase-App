import React from 'react';
import moment from 'moment';


const Notifications = (props) => {
    return (
        <div className="notifications">
            <span>Notifications</span>
            <ul className="notification-ul">
                {props.notifications && props.notifications.map(item => {
                    return (
                        <li key={item.id}>
                            <span>{item.user} {}</span>
                            <span>{item.content} {}</span>

                            <div className="grey">
                                {moment(item.time.toDate()).fromNow()}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Notifications;