import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Commons = (props) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name}</h1>
                <h2 className="my-3">
                  Here you will learn to code from basic to full stack
                  development. You will be able to build web and mobile
                  applications using JAMStack Serverless. Are you ready?
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn btn-primary">
                    {props.btname}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-l order-lg-2 header-img">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt="missing"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commons;
