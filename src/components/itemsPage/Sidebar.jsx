import React from "react";

export default function Sidebar() {
  return (
    <>
     
      <div className="side-bar mt-4 pb-3 mb-4">
        <h4 className="p-3">PRICES</h4>
        <p className="px-3 d-flex justify-content-between">
          <a href="#link" className="text-decoration-none text-dark">
            Ranger:
          </a>
          <p className="m-0">$13.99 - $25.99</p>
        </p>

       <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
       
      </div>
      <div className="side-bar mt-4 pb-3 mb-4">
        <h4 className="p-3">COLOR</h4>
        <div className="d-flex">
          <div className="circle bg-primary ms-3"></div>
          <div className="circle bg-danger ms-3"></div>
          <div className="circle bg-dark ms-3"></div>
          <div className="circle bg-warning ms-3"></div>
          <div className="circle bg-success ms-3 "></div>
          <div className="circle bg-info ms-3"></div>
          <div className="circle bg-secondary ms-3 "></div>
        </div>
      </div>
      <div className="side-bar">
        <h4 className="p-3">Author</h4>
        <p className="px-3 d-flex justify-content-between">
          <a href="#link" className="text-decoration-none text-dark">
          Stephen King
          </a>
          <p className="m-0">99</p>
        </p>
        <p className="px-3 d-flex justify-content-between">
          <a href="#link" className="text-decoration-none text-dark">
          John Grisham
          </a>
          <p className="m-0">99</p>
        </p>
        <p className="px-3 d-flex justify-content-between ">
          <a href="#link" className="text-decoration-none text-dark">
          Agatha Christie
          </a>
          <p className="m-0">99</p>
        </p>
        <p className="px-3 d-flex justify-content-between ">
          <a href="#link" className="text-decoration-none text-dark">
          Anne Rice
          </a>
          <p className="m-0 pb-4">99</p>
        </p>
       
      </div>
      <div className="side-bar text-center py-3">
        MORE
      </div>
    </>
  );
}
