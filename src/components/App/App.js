import './App.css';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import React from 'react';
import { SAMPLE_PARAGRAPHS } from '../../data/sampleParas';

const TotalTime = 60;
const URL = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
  selectedParagraph: "",
  timerStarted: false, 
  timeRemaining: TotalTime,
  words: 0,
  characters: 0, 
  wpm: 0,
  testInfo: []
};

class App extends React.Component {
  state = defaultState;

  fetchNewParaFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ]
  
    const selectedParagraphArray = data.split("");
      console.log(selectedParagraphArray);
      const testInfo = selectedParagraphArray.map(selectedLetter => {
        return ({
            testLetter: selectedLetter,
            status: "notAttempted"
        })
      });

      //Resetting to default values
      this.setState({ ...defaultState, testInfo, selectedParagraph: data })
      //when the name of the key = name of the value, we can just use one name to represent,
      // so testInfo: testInfo becomes just testInfo
  }

  fetchNewPara = () => {
    fetch(URL)
    .then(response => response.text())
    .then(data => {
  
      const selectedParagraphArray = data.split("");
      console.log(selectedParagraphArray);
      const testInfo = selectedParagraphArray.map(selectedLetter => {
        return ({
            testLetter: selectedLetter,
            status: "notAttempted"
        })
      });

      //Resetting to default values
      this.setState({ ...defaultState, testInfo, selectedParagraph: data })
      //when the name of the key = name of the value, we can just use one name to represent,
      // so testInfo: testInfo becomes just testInfo
    })
  }

  componentDidMount() {
    // this.fetchNewPara();
    this.fetchNewParaFallback();
  }
  //1. render method gets called
  //2. fetch method is called and we update the state by setting the response as the new state
  //3. due to state change, render method gets called again

  startTimer = () => {
    this.setState({ timerStarted: true})
    const timer = setInterval(() => {
        if (this.state.timeRemaining > 0) {

          //changing the words per minute count
          const timeSpent = TotalTime - this.state.timeRemaining; 

          const wpm = (timeSpent > 0) ? ((this.state.words / timeSpent) * TotalTime) : 0;
          this.setState({ 
            timeRemaining: this.state.timeRemaining - 1,
            wpm: parseInt(wpm)
          })
        } else 
        {
          clearInterval(timer);
        }
        
    }, 1000)
  }

  startAgain = () => {
    this.fetchNewParaFallback();
    // this.fetchNewPara();
    console.log('starting again!!');
  }

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) 
      this.startTimer()
    console.log(inputValue);

    // 1. Handle the underflow case - all characters should be shown as not-attempted
    // 2. Handle the overflow case - early exit
    // 3. Handle the backspace case
    //      - Mark the [index+1] element as notAttempted
    //        (irrespective of whether the index is less than zero)
    //      - But, don't forget to check for the overflow here
    //        (index + 1 -> out of bound, when index === length-1)
    // 4. Update the status in test info
    //      1. Find out the last character in the inputValue and it's index
    //      2. Check if the character at same index in testInfo (state) matches
    //      3. Yes -> Correct
    //         No  -> Incorrect (Mistake++)
    // 5. Irrespective of the case, characters, words and wpm can be updated

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    //handling the underflow case
    if (index < 0) {
      this.setState({
          testInfo: [
            {
              testLetter: this.state.testInfo[0].testLetter,
              status: "notAttempted"
            },
            ...this.state.testInfo.slice(1)
          ],
          characters,
          words
      });

      //early exit
      return;
    }

    //handling the overflow case
    if (index >= this.state.selectedParagraph.length) {
        this.setState({ words, characters })
        return;
    }

    //handling the backspace case
    const testinfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testinfo[index + 1].status = "notAttempted";

    //check for the correct typed letter 
    const isCorrect = inputValue[index] === testinfo[index].testLetter;

    //update the test info
    testinfo[index].status = isCorrect ? "correct" : "incorrect";

    //Update the state
    this.setState({ 
      testinfo,
      words,
      characters
    })
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
              startAgain = {this.startAgain}

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
