import React from 'react'
import './TryAgain.css'

const TryAgain = ({
    words, 
    characters, 
    wpm
}) => {
    return ( 
        <div className="try-again-container">
            <h1>Test Results</h1>
            
            <div className="result-container">
                <p>
                    <b>Characters: </b> {characters}
                </p>
                <p>
                    <b>Words: </b> {words}
                </p>
                <p>
                    <b>Speed: </b> {wpm} WPM
                </p>
            </div>

            <div>
                <button className="end-buttons start-again-btn">Retry</button>
               
                <button onClick={()=> {window.open("http://www.facebook.com/sharer/sharer.php?u=Check out this new typing tool that I built!", "facebook-share-post-dialog", "width-800, heigth=600")}} 
                className="end-buttons share-btn">
                Share</button>

                <button onClick={()=> {window.open("https://www.twitter.com/intent/tweet?text=Check out this new typing app that I built!", "twitter-share-post-dialog", "width-800, heigth=600")}}
                className="end-buttons tweet-btn">
                Tweet</button>

            </div>
        </div>
     );
}
 
export default TryAgain;