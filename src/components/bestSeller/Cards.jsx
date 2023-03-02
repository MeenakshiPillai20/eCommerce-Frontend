import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';
import { cartData } from '../../data/cartData';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function Cards({item, handleClick}) {
  //    const navigate = useNavigate();
  // function addToCart(){
  //   navigate('/cart')
  // }
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState("");
  const [type,setType] = useState("");


   const addToCart = () => {
    const addList = cartData;
    addList.push({
      name:name,
      image:image,
      price:price,
      type:type,
      qty:1
    })
    console.log("Add List => ",addList)
     console.log("Cart Data => ",cartData)
   }

  return (
    <Card >
      <Card.Img variant="top" src={item.image} className="pt-3 cardImage "/>
      <Card.Body>
        <Card.Title className='text-center mt-4 mb-4'>{item.name}</Card.Title>
        <div className='text-center'>
           <i className="fas fa-star "></i>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="far fa-star"></i>
        </div>
        <div className='price'>
          <p className='old me-4 mb-0 text-decoration-line-through text-muted'  >{item.oldPrice}</p>
          <p className='new mb-0 fw-bold'>{item.newPrice}</p>
        </div>
        
        <button type="button" className="btn btn-primary mt-3 ms-5" onMouseOver={() => {
          setName(item.name)
          setImage(item.image)
          setPrice(item.newPrice)
          setType(item.type)
        }} onClick={() => {
          addToCart()                     
        }}>Add to Cart</button>
        
        {/* <NavLink to='/cart' onClick={() => addToCart(image,name,newPrice,oldPrice)}>
           <button type="button" className="btn btn-primary mt-3 ms-5" >Add to Cart</button>
        </NavLink> */}
        {/* <Link to="/cart" state={{ data: item}} className="btn btn-primary mt-3 ms-5"> Add to Cart </Link> */}
      </Card.Body>
    </Card>
  );
} 


