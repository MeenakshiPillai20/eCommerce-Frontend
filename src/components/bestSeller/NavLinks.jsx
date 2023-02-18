import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const NavLinks = () => {
  return (
    <>
      
      <Dropdown className="full-dropdown">
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
          id="dropdown-basic">
          <option selected>ALL</option>
          <option value="1"> MAC</option>
          <option value="2">IPHONE</option>
          <option value="3"> IPAD</option>
          <option value="2">IPOD</option>
          <option value="3"> ACCESORIES</option>
        </select>
      </Dropdown>
    </>
  );
};

export default NavLinks;
