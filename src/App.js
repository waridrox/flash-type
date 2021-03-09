import './App.css';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav/>
      {/* Landing Page */}
      <Landing />
      {/* Challenge section */}
      <ChallengeSection/>
      {/* Child component of Challenge Section is going to be a Test Container
      which is going to conditionally render TypingChallenge container and TryAgain container.
       */}
      {/* Footer section */}
      <Footer/>

    </div>
  );
}

export default App;
