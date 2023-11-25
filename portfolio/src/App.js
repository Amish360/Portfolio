import './App.css';
import Header from './components/Main/Header';
import Jumbotron from './components/Main/Jumbotron'
import Skills from './components/Main/Skills';
import Projects from './components/Main/Projects';
import About from './components/Main/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <p>
        <Header/>

        <Jumbotron/>
        <Skills/>
        <Projects/>
       
        <About/>
      </p>
    </div>
  );
}

export default App;
