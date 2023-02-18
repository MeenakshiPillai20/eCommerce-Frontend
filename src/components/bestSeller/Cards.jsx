import Card from 'react-bootstrap/Card';

export default function Cards(props) {
  return (
    <Card >
      <Card.Img variant="top" src={props.image} className="pt-3 cardImage "/>
      <Card.Body>
        <Card.Title className='text-center mt-4 mb-4'>{props.name}</Card.Title>
        <div className='text-center'>
           <i class="fas fa-star "></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="far fa-star"></i>
        </div>
        <div className='price'>
          <p className='old me-4 mb-0 text-decoration-line-through text-muted'  >$499</p>
          <p className='new mb-0 fw-bold'>$599</p>
        </div>
        
      </Card.Body>
    </Card>
  );
} 


