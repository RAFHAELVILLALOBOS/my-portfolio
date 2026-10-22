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
        

        
        {/* Projects Section */}
        <div id="Projects" className="section">
            <h2>Projects</h2>
             <div className="cards">
              <div className="card">
               <h3>NUTTY: Peanut Butter Ordering System</h3>
                <p> A web-based ordering system where customers can browse peanut butter
                    products, place orders, and track them. The owner can manage products,
                     orders, refunds, and sales. </p>
    
        </div>
           <div className="card">
            <h3>SmartQueue</h3>
              <p> A queue management system for school canteens that helps students order
        faster and reduces long waiting lines. </p>
   
   
        </div>
         <div className="card">
         <h3>MyDacanlao</h3>
          <p> A proposed barangay system that combines resident records, certification
        requests, and scholarship applications in one place. </p>
    </div>
  </div>
</div>
      
      <div id="About" className="section">
  <h2>About</h2>
  <p>
    I'm an IT student at Batangas State University in Balayan, Batangas.
    I like making websites that are easy to use. I Projects I made: NUTTY, 
    SmartQueue, and MyDacanlao. I use HTML, CSS, JavaScript, PHP, and MySQL. 
    I am also learning React. I want to keep learning and build more useful websites 
    and apps.
  </p>
</div>
</div>

  )
}

export default App