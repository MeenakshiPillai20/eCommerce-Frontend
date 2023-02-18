import React,{useState} from "react";
import { Container, Table } from "react-bootstrap";
// import image1 from "../../images/3_Corousel.png";
// import image2 from "../../images/apple_macbook_main.png";

export default function Carts() {
  let [num, setNum]= useState(0);
  let [num1, setNum1]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let incNum1 =() => {
    if(num1<10)
    {
    setNum1(Number(num1)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
  let decNum1=()=> {
    if(num1>0)
    {
     setNum1(num1 - 1);
    }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  return (
    <>
      <Container>
        <Table hover>
          <thead className="mb-4">
            <tr >
              <th className="pb-4">PRODUCT</th>
              <th className="pb-4">PRICE</th>
              <th className="d-flex justify-content-center pb-4">QTY</th>
              <th className="pb-4">UNIT PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="" alt="" className="imgg" />
                Philips Hue 7W BR30 Connected Downlight Lamp
              </td>
              <td className="cen">$998</td>
              <td>
                <div className="side-bar d-flex justify-content-center resp">
                  <button class="btn btn-outline-primary " type="button" onClick={decNum}>
                    -
                  </button>
               
                <input type="text" class="form-control  w-25 ps-5 me-2" value={num} onChange={handleChange}/>
              
                  <button class="btn btn-outline-primary" type="button" onClick={incNum}>
                    +
                  </button>
                </div>
              </td>
              <td className="py-5">$499</td>
            </tr>
            <tr>
              <td>
              <img src="" alt="" className="imgg" />
              Apple Macbook Pro
              </td>
              <td>$998</td>
              <td>
              <div className="side-bar d-flex justify-content-center resp">
                  <button class="btn btn-outline-primary " type="button" onClick={decNum1}>
                    -
                  </button>
               
                <input type="text" class="form-control w-25 ps-5 me-2" value={num1} onChange={handleChange}/>
              
                  <button class="btn btn-outline-primary" type="button" onClick={incNum1}>
                    +
                  </button>
                </div>
              </td>
              <td>$499</td>
            </tr>
            
          </tbody>
        </Table>
         <div className="d-flex  justify-content-around mt-5">
         <div class="input-group m-3 w-25 ">
            <input type="text" class="form-control h-25" placeholder="Voucher Code" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
           <div class="input-group-append">
              <span class="input-group-text bg-primary text-white h-25" id="basic-addon2">Redeem</span>
          </div>
        </div>
        <div className="card-box   m-3">
          <div className="d-flex justify-content-around">
            <p className=" w-25">Subtotal</p>
            <p>$998</p>
          </div>
           <div className="d-flex justify-content-around">
            <p className=" w-25">Shipping fee</p>
            <p>$20</p>
          </div>
          <div className="d-flex justify-content-around">
            <p className=" w-25">Coupon</p>
            <p>No</p>
          </div>
          <div className="d-flex justify-content-around">
            <h4 className=" sec4-head ">TOTAL</h4>
            <h4 className="sec4-head ">$1018</h4>
          </div>
        </div>
         </div>
      </Container>
    </>
  );
}
