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
        class="carousel carousel-dark slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active ms-1">
            <div class="card-wrapper container-sm ">
              {base1 &&
                base1.map((item) => {
                  return (
                    <>
                      <div class="card feature-card ">
                        <div className=" m-2 ">
                          <img
                            src={item.image}
                            class="feature-card-img"
                            alt="..."
                          />
                        </div>
                        <div class="feature-card-body my-4 me-3 ">
                          <h5 class="text-center feature-resp-text ">
                            {item.name}
                          </h5>
                          <div className="text-center m-3">
                            <i class="fas fa-star "></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <div className="price">
                            <p className="old me-4 mb-0 ">{item.oldPrice}</p>
                            <p className="new mb-0">{item.newPrice}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div class="carousel-item">
            <div class="card-wrapper container-sm">
              {base2 &&
                base2.map((item) => {
                  return (
                    <>
                      <div class="card feature-card ">
                        <div className=" m-2 ">
                          <img
                            src={item.image}
                            class="feature-card-img"
                            alt="..."
                          />
                        </div>
                        <div class="feature-card-body my-4 me-3 ">
                          <h5 class="text-center feature-resp-text ">
                            {item.name}
                          </h5>
                          <div className="text-center m-3">
                            <i class="fas fa-star "></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <div className="price">
                            <p className="old me-4 mb-0 ">{item.oldPrice}</p>
                            <p className="new mb-0">{item.newPrice}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
