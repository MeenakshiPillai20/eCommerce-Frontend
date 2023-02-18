import React from "react";
import { NavDropdown } from "react-bootstrap";

const Dropdowns = () => {
  return (
    <>
      <NavDropdown title="EN" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action1">HI</NavDropdown.Item>
        <NavDropdown.Item href="#action2">DA</NavDropdown.Item>
        <NavDropdown.Item href="#action3">JA</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action4">IT</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="$" id="collasible-nav-dropdown" className="ms-4">
        <NavDropdown.Item href="#action1">£</NavDropdown.Item>
        <NavDropdown.Item href="#action2">€</NavDropdown.Item>
        <NavDropdown.Item href="#action3">₹</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action4">₩</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Dropdowns;
