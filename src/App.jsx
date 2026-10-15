import './style.css'
import pic from './assets/pic.jpg'

function App() {
  return (
    <div>
      <nav>
        
        <a href="#Home" className="logo">Rafhael P. Villalobos</a>
        <div className="links">
          <a href="#Home">Home</a>
          <a href="#Projects">Projects</a>
          <a href="#About">About</a>
        </div>
      </nav>

      <div id="Home" className="Home">
        <div className="text">
          <h1>Hi, I'm Rafhael P. Villalobos.</h1>
          <h3>Web developer and designer</h3>
          <p>
            I build simple, useful websites and apps
          </p>
        </div>
        <img src={pic} alt="Profile Picture" />
      </div>

      <div id="Projects" className="section">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>Project One</h3>
            <p>Short description of the project.</p>
          </div>

          <div className="card">
            <h3>Project Two</h3>
            <p>Short description of the project.</p>
          </div>

          <div className="card">
            <h3>Project Three</h3>
            <p>Short description of the project.</p>
          </div>

        </div>
      </div>

      <div id="About" className="section">
        <h2>About</h2>
        <p>Write about yourself here.</p>
      </div>
    </div>

  )
}

export default App