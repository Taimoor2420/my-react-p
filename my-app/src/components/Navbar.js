import React from 'react'

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <div className='row '>
          <div className='col-12 '>
          <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid ">
    <a className="navbar-brand"  href="/">ALBENIS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">SKILLS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="/">SERVICE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="/">PROJECT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="/">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
          </div>
      </div>
    </div>
  )
}

export default Navbar
