import React from 'react';
import confession from './confession.css';
import ConfessionSummary from './ConfessionSummary';

const ConfessionList = (props) => {
    console.log(props)
    return (
        <div>
            {props.confessions && props.confessions.map(confession => {
                return (
                    <ConfessionSummary confession={confession} key={confession.id} />
                )
            })}
        </div >
    )
}

export default ConfessionList;