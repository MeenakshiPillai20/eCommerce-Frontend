import React from 'react'
import { NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div className="side-bar my-4 p-3 d-flex resp-item-header">
        <div className="d-flex justify-content-left">
          <p className="m-0 boxx me-4">13 items</p>
          <p className="m-0 boxx ps-4">Sort By</p>
          <NavDropdown
            title="Name"
            id="collasible-nav-dropdown"
            className="boxx "
          >
            <NavDropdown.Item href="#action1">Type</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Date</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Size</NavDropdown.Item>
          </NavDropdown>

          <p className="m-0 boxx ps-5">Show</p>
          <NavDropdown
            title="12"
            id="collasible-nav-dropdown"
            className="boxx ps-2"
          >
            <NavDropdown.Item href="#action1">23</NavDropdown.Item>
            <NavDropdown.Item href="#action2">12</NavDropdown.Item>
            <NavDropdown.Item href="#action3">32</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="last">
          <div className="boxes">
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
          </div>
        </div>
      </div>
    </>
  )
}
