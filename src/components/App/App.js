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
      wpm: 0,
      testInfo: []
  };

  componentDidMount() {
    // fetch(URL)
    // .then(response => response.text())
    // .then(data => {
    //   this.setState({selectedParagraph: data})
    // })
    const selectedParagraphArray = this.state.selectedParagraph.split("");
    console.log(selectedParagraphArray);
    const testInfo = selectedParagraphArray.map(selectedLetter => {
      return ({
          testLetter: selectedLetter,
          status: "notAttempted"
      })
    });

    this.setState({ testInfo })
    //when the name of the key = name of the value, we can just use one name to represent,
    // so testInfo: testInfo becomes just testInfo
  }
  //1. render method gets called
  //2. fetch method is called and we update the state by setting the response as the new state
  //3. due to state change, render method gets called again


  handleUserInput = (inputValue) => {
    console.log(inputValue);
  }

  render() { //Should be devoid of any async method
    console.log(this.state.testInfo);
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
              testInfo = {this.state.testInfo}
              onInputChange = {this.handleUserInput}

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
