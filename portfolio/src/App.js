import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <p>
        <Header/>
        Hello World
        <Jumbotron/>
        <Skills/>
        <Projects/>
        <Footer/>
      </p>
    </div>
  );
}

export default App;
