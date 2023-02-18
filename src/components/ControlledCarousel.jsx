import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';


export default function ControlledCarousel() {
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >

      <Carousel.Item >
        <img className="d-block w-100 caro-main" src="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581__340.jpg" alt="First slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 caro-main" src="https://thumbs.dreamstime.com/b/baoan-library-interior-landscape-shenzhen-china-65398920.jpg" alt="Second slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 caro-main" src="https://c4.wallpaperflare.com/wallpaper/424/613/297/library-books-shelves-fisheye-lens-wallpaper-preview.jpg" alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}
