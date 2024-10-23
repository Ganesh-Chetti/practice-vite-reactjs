import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../image/71ZtKU5PtAL.jpg';
import Image2 from '../image/Chattanooga_Music_Courtney_Holder_4_3f0f36a4-c4b8-4eca-85be-b502166501aa.jpg';
import Image3 from '../image/schwarzwald-tapas-eine.jpg';
import hel from './res.module.css'
import { Component } from 'react';

class Classrescarousel extends Component {

    render(){
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className={hel.class1}
          src={Image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className={hel.class1}
          src={Image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className={hel.class1}
          src={Image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
}

export default Classrescarousel;
