import React from 'react';
import moment from 'moment';


const ConfessionSummary = (props) => {
    //console.log(props)
    return (
        <div className="confession-list">
            <p>{props.confession.title}</p>
            <p>{props.confession.content}</p>
            <p>Posted by {props.confession.authorFirstName} {props.confession.authorLastName}</p>
            <p className="grey">{moment(props.confession.createdAt.toDate()).calendar()}</p>
        </div>
    )
}

export default ConfessionSummary;