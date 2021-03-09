import React from 'react';
import './ChallengeDetailsCards.css'

const ChallengeDetailsCards = ({cardName, cardValue}) => {
    return ( 
        <div className="details-card-container">
            {/* Card Name */}
            <div className="card-name">{cardName}</div>
            {/* Card Value */}
            <div className="card-value">{cardValue}</div>
        </div>
     );
}
 
export default ChallengeDetailsCards;