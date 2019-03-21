import React from 'react';
import confession from './confession.css';
import ConfessionSummary from './ConfessionSummary';
import { Link } from 'react-router-dom';

const ConfessionList = (props) => {
    console.log(props)
    return (
        <div>
            {props.confessions && props.confessions.map(confession => {
                return (
                    <Link to={'/confession/' + confession.id} key={confession.id}>
                        <ConfessionSummary confession={confession} />
                    </Link>



                )
            })}
        </div >
    )
}

export default ConfessionList;