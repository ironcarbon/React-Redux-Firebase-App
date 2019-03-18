import React from 'react'

const ConfessionDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="confession-list">
            <div>
                <span>Confession Title - {id}</span>
                <p>gfhgdskghdskghkgfhskgsghgsdkghskghskgsdhgbks</p>
            </div>
            <div className="grey">
                <div>Posted By Ipek</div>
                <div>18th March, 1pm</div>
            </div>
        </div>
    )
}

export default ConfessionDetails;



