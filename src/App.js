import Header from './components/Header/Header';
import Body from './components/Body/Body';
import About from './components/About/About';
import Project from './components/Projects/Porjects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div id="app" className="App">
      <Header></Header>
      <Body></Body>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;