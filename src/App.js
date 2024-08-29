
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Works from './components/Works'
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <>
    <Header/>
    <Intro/>
    <Works/>
    <About/>
    <Contact/>
    <Footer/>
    </>
      
    </div>
  );
}

export default App;
