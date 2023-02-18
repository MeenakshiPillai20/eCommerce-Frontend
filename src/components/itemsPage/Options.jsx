import React from "react";

export default function Options(props) {
  return (
    <>
      <p className="px-3 d-flex justify-content-between">
        <a href="#link" className="text-decoration-none text-dark">
          {
            props.type
          }
        </a>
        <p className="m-0">{props.qty}</p>
      </p>
    </>
  );
}
export function LinksInNav(props) {
  return (
    <>
        <p className="w-25 "><a href="#link" className=" py-2 ps-3 text-decoration-none text-white">{props.type}</a></p>
    </>
  );
}
