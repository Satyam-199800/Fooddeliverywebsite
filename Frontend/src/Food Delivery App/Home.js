import React from 'react';
import logo from '../Food Delivery App/Food images/delivery-guy.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>
      <div className="b-example-divider"></div>

<div className="container-fluid col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
    <div className="col-lg-6">
      <h1 className="display-1 fw-bold lh-1 mb-3">Want to order online</h1>
     
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <NavLink to={'login'}>
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">LogIn</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Signup</button>
        </NavLink>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Home;

