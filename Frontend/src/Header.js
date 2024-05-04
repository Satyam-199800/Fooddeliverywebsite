import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <div>
      <nav className="navbar navbar-expand-lg bg-danger header">
  <div className="container-fluid sticky">
    <a className="navbar-brand" href="/">About Us</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <NavLink to={'Menu'}>
          <a className="nav-link" href="/">Menu</a>
          </NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Header;
