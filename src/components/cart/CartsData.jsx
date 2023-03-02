import React from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, 
        MDBRadio, MDBRow, MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import { cartData } from "../../data/cartData";
import Items from "./Items";


export default function CartsData() {

  return (
     <>
     <section className="h-100 h-custom">
         <MDBContainer className="py-5 h-100">
           <MDBRow className="justify-content-center align-items-center h-100">
           <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" > PRODUCT </th>
                  <th scope="col">TYPE</th>
                  <th scope="col" className="ps-5 qty me-4"> QTY </th>
                  <th scope="col"> PRICE </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
               {
                cartData.map((val) => {
                  return (
                    <>
                       <Items items={val}/>
                    </>
                  );
                })
               }
              </MDBTableBody> 
            </MDBTable>
          </MDBCol>
           </MDBRow>
         </MDBContainer>
    </section>
          <MDBCard className="shadow-2-strong mb-5 mb-lg-0 mt-5 mx-5" style={{ borderRadius: "16px" }}>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">

                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio type="radio" name="radio1" checked value="" aria-label="..." />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-mastercard fa-2x text-dark pe-2"/>
                          Credit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio type="radio" name="radio1" checked value="" aria-label="..." />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                          Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio type="radio" name="radio1" checked value="" aria-label="..." />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                          PayPal
                        </p>
                      </div>
                    </div>
                  </form>

                </MDBCol>
                <MDBCol md="6" lg="4" xl="6" className="mt-5">
                  <MDBRow>
                    <MDBCol size="6" xl="6">
                      <MDBInput className="mb-4" placeholder="Enter Name on Card" size="md" />
                      <MDBInput className="mb-4" placeholder="Enter Expiry Date"
                        size="md" maxLength={7} minLength={7}/>
                    </MDBCol>

                    <MDBCol size="6" xl="6">
                      <MDBInput className="mb-4" placeholder="Enter Card Number" size="md"
                        minlength="19" maxlength="19"/>
                      <MDBInput className="mb-4" placeholder="Enter CVV number" size="md"
                        minlength="3" maxlength="3" type="password"/>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol lg="4" xl="3">
                  <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">$23.49</p>
                  </div>

                  <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$2.99</p>
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">$26.48</p>
                  </div>

                  <MDBBtn block size="lg">
                    <div className="d-flex justify-content-between ">
                      <span className="text-white me-3">Checkout</span>
                      <span className="text-white">$26.48</span>
                    </div>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
     </>
  );
}

