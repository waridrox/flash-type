import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'

const TestContainer = ({ words, characters, wpm }) => {

    const timeRemaining = 21;

    return ( 
        <div className="test-container">
            {
                (timeRemaining > 0) ? (
                <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer 
                words={words} 
                characters={characters} 
                wpm={wpm} />
                </div>
                ) : (
                
                <div className="try-again-container">
                <TryAgain 
                words={words} 
                characters={characters} 
                wpm={wpm}/>
                </div>
                )
            }
             
            {/* <h1>This is the test-</h1> */}
            {/* <div className="try-again-container">
                <TryAgain words={words} characters={characters} wpm={wpm}/>
            </div> */}
        </div>
     );
}
 
export default TestContainer;