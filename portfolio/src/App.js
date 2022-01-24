
import './App.css';
import img1 from './img/f1.jpg';
import img2 from './img/game.jpg';
import img3 from './img/museum.jpg';
import img4 from './img/portfolio1.jpg';
import img5 from './img/portrett.jpg';
import img6 from './img/twitter.jpg';
import img7 from './img/instagram.jpg';
import img8 from './img/linkedin-in.jpg';
import img9 from './img/github.jpg';


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
              <p>Im a 23 year old Front-end developer based in Bergen, Norway.<br></br> I love to play videogames and watch manny different sports.</p>
            </div>
          </div>

          <div className='headLine'>
            <h2>My Projects</h2>
          </div>

          <div className="links">
            <div className="link-1">
              <a href='https://modest-kepler-ed6546.netlify.app/'><img className='project-img' src={img1}></img></a>
            </div>
            <div className="link-2">
              <a href='https://xenodochial-williams-da9e54.netlify.app/'><img className='project-img' src={img2}></img></a>
            </div>
            <div className="link-3">
              <a href='https://mystifying-kalam-3810b7.netlify.app/'><img className='project-img' src={img3}></img></a>
            </div>
            <div className="link-4">
            <a href='https://objective-mcclintock-d0a380.netlify.app/index.html'><img className='project-img' src={img4}></img></a>
            </div>
          </div>


          <div className='headLine'>
            <h2>Contact me</h2>
          </div>

          <div className='contact'>
            <div className='portrett'>
              <img className='portrett-img' src={img5}></img>
            </div>

            <div className='contLinks'>
              <div className="sosial">
                <a href='https://twitter.com/MaJohannesen'><img className='sosial-img' src={img6}></img></a>
              </div>

              <div className="sosial">
                <a href='https://www.instagram.com/matiasgarciajohannesen/'><img className='sosial-img' src={img7}></img></a>
              </div>

              <div className="sosial">
                <a href='https://www.linkedin.com/in/matias-garcia-johannesen-b94b29213/'><img className='sosial-img' src={img8}></img></a>
              </div>

              <div className="sosial">
                <a href='https://github.com/matiasgarciajohannesen'><img className='sosial-img' src={img9}></img></a>
              </div>

            </div>
          </div>

      </body>
    </div>
  );
}

export default App;
