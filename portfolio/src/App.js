
import './App.css';
import img1 from './img/f1.jpg';
import img2 from './img/game.jpg';
import img3 from './img/museum.jpg';
import img4 from './img/portfolio1.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">Matias G. Johannesen</h1>
        <button>Contact</button>
      </header>
      
      <body>
          <div className="top"> 
            <h2 className="front">Front-End</h2>
              <h2 className="dev">Developer</h2>
            <div className="info">
              <h3>About me:</h3>
              <p>Im a 23 year old Front-end developer based in Bergen, Norway</p>
            </div>
          </div>

          <div className='headLine'>
            <h2>My Projects</h2>
          </div>

          <div className="links">
            <div className="link-1">
              <img className='project-img' src={img1}></img>
            </div>
            <div className="link-2">
            <img className='project-img' src={img2}></img>
            </div>
            <div className="link-3">
            <img className='project-img' src={img3}></img>
            </div>
            <div className="link-4">
            <img className='project-img' src={img4}></img>
            </div>
          </div>
      </body>
    </div>
  );
}

export default App;
