import React from "react";
import { NavDropdown } from "react-bootstrap";

export default function ItemsShopNow() {
  return (
    <>
      <div className="ItemShopNow ">
        <div className="Item-left-box ">
          <div className="content m-3">
            <h2 className="font items-shop-head">Books are Magic</h2>
            <p className="font items-shop-para">
              You never know know where they're going to end up..
            </p>
            <a href="#link" className="font">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="Item-right-box ">
          <img src="https://avatars.mds.yandex.net/i?id=61db361e8f1166d637e6aa0faeff17e730abe566-7629136-images-thumbs&n=13" alt="" className="resp-item-img  " />
        </div>
      </div>
      <div className="resp-item-show">
        <div className="side-bar text-center mb-4 ">
          <p className="text-primary p-2">Store / Accessories</p>
        </div>
        <div className="side-bar p-3 mb-4 d-flex ">
          <div className="boxes me-2">
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
          <div>
          <div className="d-flex">
          <p className="m-0  w-100 mx-2 text-muted">Sort By</p>
          <NavDropdown
            title="Name"
            id="collasible-nav-dropdown"
            className=" me-5"
          >
            <NavDropdown.Item href="#action1">Type</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Date</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Size</NavDropdown.Item>
          </NavDropdown>
          <p className="m-0">Filter</p>
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
