import React from "react";



export default function ItemsCard() {
  return (
    <>
      
      <div className="side-bar d-flex justify-content-center m-3 resp-item-header">
        <a href="#link" className=" p-4 clickable click-active">1</a>
        <a href="#link" className=" p-4 clickable">2</a>
        <a href="#link" className=" p-4 clickable">3</a>
        <a href="#link" className=" p-4 clickable">4</a>
        <a href="#link" className=" p-4 clickable">5</a>
      </div>
      <div className="d-flex gap-3 resp-item-show mt-5 p-3">
        <button type="button" className="btn btn-light w-50">Previous</button>
        <button type="button" className="btn btn-primary w-50">Next</button>
      </div>
    </>
  );
}
