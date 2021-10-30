import './App.css';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import React from 'react';

const TotalTime = 60;
// const URL = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
  state = {
      selectedParagraph: "Tester",
      timerStarted: false, 
      timeRemaining: TotalTime,
      words: 0,
      characters: 0, 
      wpm: 0
  }

  render() { //Should be devoid of any async method
    return (
          <div className="App">
            {/* Navbar */}
            <Nav/>
            {/* Landing Page */}
            <Landing />
            {/* Challenge section */}
            <ChallengeSection
              selectedParagraph={this.state.selectedParagraph}
              words = {this.state.words}
              characters = {this.state.characters}
              wpm = {this.state.wpm}
              timeRemaining = {this.state.timeRemaining}
              timerStarted = {this.state.timerStarted}

            />
            {/* Child component of Challenge Section is going to be a Test Container
            which is going to conditionally render TypingChallenge container and TryAgain container.
             */}
            {/* Footer section */}
            <Footer/>
      
          </div>
        );
  }
}

export default App;
