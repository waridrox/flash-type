import React from 'react';
import ChallengeDetailsCards from '../ChallengeDetailsCards/ChallengeDetailsCards';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timerStarted }) => {
    return ( 
        <div className="typing-challenge-container">
            {/* Details section */}
            <div className="details-container">
                {/* Words typed */}
                <ChallengeDetailsCards cardName="Words" cardValue={words}/>
                {/* Characters typed */}
                <ChallengeDetailsCards cardName="Characters" cardValue={characters}/>
                {/* Speed / mistakes */}
                <ChallengeDetailsCards cardName="Speed" cardValue={wpm}/>
            </div>
            {/* main challenge section */}

            <div className="typewriter-container">
                <TypingChallenge 
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                />
                {/* <p>Ready for the challenge?!</p> */}
            </div>
        </div>
     );
}
 
export default TypingChallengeContainer;