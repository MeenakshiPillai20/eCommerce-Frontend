import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowLeftCircle } from "react-icons/bs";
import CartsData from '../components/cart/CartsData'
import Empty from '../components/cart/Empty';
import { cartData } from '../data/cartData';


export default function Cart() {
  return (
    <>
      <Container className="m-head">
        <h1 className="head mt-3 mb-5">Shopping Cart</h1>
      </Container>
      <div className="side-bar text-center mb-4 p-3">
        <Container className="cart-container justify-content-between">
        <Link to="/" className="text-primary text-decoration-none  ">
                <BsArrowLeftCircle className="me-4" style={{ fontSize: '2em'}} />
                Continue Shopping
              </Link>
              <p className="text-primary m-0 pe-5"><AiOutlineShoppingCart style={{ fontSize: '2em'}}/></p>
        </Container>
      </div>  
     {
      cartData.length === 0 ? <Empty /> : <CartsData/>
     }
      
      <Footer/>

    </>
  )
}
