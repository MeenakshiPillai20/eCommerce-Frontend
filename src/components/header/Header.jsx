import React from "react";
import NavLinks from "../header/NavLinks";
import { Container, Nav, Navbar } from "react-bootstrap";
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai";
import Dropdowns from "./Dropdowns";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="t-head">
        <Navbar collapseOnSelect expand="md" bg="white" variant="white" className="p-0">
          <Container>
            <Navbar href="#home" className="res-hide">
              <Dropdowns />
            </Navbar>

            <h2 className="res-show  text-danger  ">iSHOP</h2>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Nav className="res-hide">
                <Nav.Link href="#link" className="me-4">
                  <AiOutlineUser className="me-1" />
                  My Profile
                </Nav.Link>
                <NavLink to="/cart" className="mx-2 d-flex text-decoration-none px-3 pt-2">
                   <AiOutlineShoppingCart className="mt-1 me-2" />
                   <p className=" text-decoration-none "> items </p>
                </NavLink>
                <Nav.Link href="#link">
                  <AiOutlineSearch />
                </Nav.Link>
              </Nav>

              <Nav className="res-show ">
                <Nav.Link href="#link">
                  <AiOutlineShoppingCart className="me-1" /> items
                </Nav.Link>
                <Nav.Link href="#link">
                  <AiOutlineUser className="me-1" /> My Profile
                </Nav.Link>
                <Dropdowns />
              </Nav>

              <hr className="res-show m-0" />

              <div className="search-box">
                <i className="fas fa-search mt-2 ps-3"></i>
                <input
                  id="search-focus"
                  type="search"
                  className="form-control"
                />
              </div>
              <div className="res-show justify-content-center mt-3">
                <NavLinks />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr className="m-0 hr" />
      </div>

      <Container className="m-head">
        <h1 className="head">iSHOP</h1>
      </Container>

      <Navbar bg="white" expand="md" className="l-head">
        <Container>
          <NavLinks />
        </Container>
      </Navbar>
    </>
  );
}
