import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink,useParams } from "react-router-dom";
import Cards from "../components/bestSeller/Cards";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Headers from "../components/itemsPage/Header";
import ItemsCard from "../components/itemsPage/ItemsCard";
import ItemsShopNow from "../components/itemsPage/ItemsShopNow";
import Sidebar from "../components/itemsPage/Sidebar";

export default function Academics() {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const id  = useParams();
 console.log(id.pid)
const newId = id.pid
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/academics")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(err => console.log("error => ",err))
  },[]);

  useEffect(() => {
    fetch(`https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/academics/${newId}`)
      .then((res) => res.json())
      .then((json) => setCardData(json))
      .catch(err => console.log("error => ",err))
  },[newId]);
  
  return (
    <>
      <Header />
      <div className="side-bar text-center mb-4 resp-item-header">
        <p className="text-primary p-2">Academics</p>
      </div>
      <Container className="items-container">
        <div className="resp-item-header">
          <div className="side-bar ">
            <h4 className="p-3">Categories</h4>

            {data &&
              data.map((val) => {
                return (
                  <>
                    <p className="px-3 d-flex justify-content-between">
              
                    <NavLink to={"/academics/"+val.id} activeclassname="active" className="text-decoration-none text-dark">
                       {val.type}
                    </NavLink>
                      <p className="m-0">{val.qty}</p>
                    </p>
                    
                  </>
                );
              })}
          </div>
          <Sidebar />
        </div>
        <div>
          <ItemsShopNow />
          <Headers />
          <div className="item-cards">
            {
                cardData && cardData.map((item) => {
                    return(
                        <>
                           <Cards item={item} />
                        </>
                    )
                })
            }
            
          </div>
          <ItemsCard />
        </div>
      </Container>
      <Footer />
    </>
  );
}

