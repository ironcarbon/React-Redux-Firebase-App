import React from 'react';


const ConfessionSummary = (props) => {
    //console.log(props)
    return (
        <div className="confession-list">
            <p>{props.confession.title}</p>
            <p>{props.confession.content}</p>
            <p>Posted by {props.confession.authorFirstName} {props.confession.authorLastName}</p>
            <p className="grey">15th March, 4pm</p>
        </div>
    )
}

export default ConfessionSummary;