import React, { useEffect, useState } from "react";

export default function Featured() {
  const [base1, setBase1] = useState([]);
  const [base2, setBase2] = useState([]);

  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Base/1")
      .then((res) => res.json())
      .then((json) => setBase1(json));
  }, []);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Base/2")
      .then((res) => res.json())
      .then((json) => setBase2(json));
  }, []);
  return (
    <>
      <h2 className="head2 m-5">FEATURED PRODUCTS</h2>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active ms-1">
            <div className="card-wrapper container-sm ">
              {
              base1 && base1.map((item) => {
                  return (
                    <>
                      <div className="card feature-card ">
                        <div className=" m-2 ">
                          <img src={item.image} className="feature-card-img" alt="..."/>
                        </div>
                        <div className="feature-card-body my-4 me-3 ">
                          <h5 className="text-center feature-resp-text "> {item.name} </h5>
                          <div className="text-center m-3">
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                          <div className="price">
                            <p className="old me-4 mb-0 ">{item.oldPrice}</p>
                            <p className="new mb-0">{item.newPrice}</p>
                          </div>
                          <button type="button" className="btn btn-primary mt-3 ms-5">Add to Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm">
              {
              base2 && base2.map((item) => {
                  return (
                    <>
                      <div className="card feature-card ">
                        <div className=" m-2 ">
                          <img src={item.image} className="feature-card-img" alt="..."/>
                        </div>
                        <div className="feature-card-body my-4 me-3 ">
                          <h5 className="text-center feature-resp-text ">{item.name}</h5>
                          <div className="text-center m-3">
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                          <div className="price">
                            <p className="old me-4 mb-0 ">{item.oldPrice}</p>
                            <p className="new mb-0">{item.newPrice}</p>
                          </div>
                          <button type="button" className="btn btn-primary mt-3 ms-5">Add to Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
