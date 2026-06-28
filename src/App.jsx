import React from 'react'

const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Monojit Nandy</div>
        <ul className="navbar-links">
          <li className="c1"><a href="aboutme">About Me</a></li>
          <li className="c2"><a href="#projects">Projects</a></li>
          <li className="c3"><a href="#download">Download</a></li>
          <li className="c4"><a href="#connect">Connect</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="aboutme">
          <div className="about">
            <h1 href="aboutme">About Me</h1>
            <h2>I'm a 20-year-old computer science student and full-stack developer passionate about building real-world solutions.
            
              I love exploring the complete development cycle from front-end design to back-end architecture.
              Currently, I'm diving deep into artificial intelligence and finding ways to integrate it into practical applications.
              For me, the best way to learn is by building, and I'm always working on projects that challenge me and solve genuine problems.
            </h2>
          </div>
        </div>
        <div className="image">
          <div className="profile-image">
            <img src="/monojit.jpg" alt="Monojit Nandy" />
          </div>
        </div>
      </section>
    <section className="skills">
      <div className="techstack">

      </div>
    </section>
    </>
  )
}


export default App
