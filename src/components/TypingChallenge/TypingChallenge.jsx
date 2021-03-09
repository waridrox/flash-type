import React from 'react'
import './TypingChallenge.css'

const TypingChallenge = ({ selectedParagraph }) => {    

    return ( 
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">09:41</p>
                    <p className="timer-info">
                        Start typing below to start the test!
                    </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {selectedParagraph}
                    </div>
                </div>

                <div className="textarea-right">
                    <textarea className="textarea" 
                    placeholder="Begin your test by typing here..." ></textarea>
                </div>
            </div>

        </div>
     );
}
 
export default TypingChallenge;