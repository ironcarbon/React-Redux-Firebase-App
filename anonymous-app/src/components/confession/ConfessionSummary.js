import React from 'react';
import confessionReducer from '../../store/reducers/confessionReducer';

const ConfessionSummary = (props) => {
    console.log(props)
    return (
        <div className="confession-list">
            <p>{props.confession.title}</p>
            <p>{props.confession.content}</p>
            <p>Posted by the Ipek</p>
            <p className="grey">15th March, 4pm</p>
        </div>
    )
}

export default ConfessionSummary;