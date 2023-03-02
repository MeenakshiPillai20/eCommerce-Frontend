import React, { useState, useEffect }  from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import  { LinksInNav } from "../itemsPage/Options";

const NavLinks = () => {

  const [fiction, setFiction] = useState([]);
  const [nonFiction, setNonFiction] = useState([]);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/fiction").then((res) => res.json())
      .then((json) => setFiction(json));
  },[]);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/non-fiction").then((res) => res.json())
      .then((json) => setNonFiction(json));
  },[]);
  return (
    <>
      <Nav className="navScroll">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              activeclassname="active"
              className="nav-link nav-linker "
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="d">
              <NavLink
                to="/fiction/1"
                activeclassname="active"
                className="nav-link nav-linker "
              >
                Fiction
              </NavLink>
              <div className="d-content">
                <div className=" row my-3">
                {fiction && fiction.map((val) => {
                return (
                  <>
                   
                    <LinksInNav key={val._id}  type={val.type}/>
                  </>
                );
              })}
                  
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="d">
              <NavLink to="/non-fiction/1" activeclassname="active" className="nav-link nav-linker">
                Non Fiction
              </NavLink>
              <div className="d-content">
                <div className=" row  my-3">
                {nonFiction && nonFiction.map((val) => {
                return (
                  <>
                    <LinksInNav key={val._id} type={val.type}/>
                  </>
                );
              })}
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/classics/1" className="nav-link nav-linker ">
              Classics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/academics/1" className="nav-link  ">
              Academics
            </NavLink>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default NavLinks;
