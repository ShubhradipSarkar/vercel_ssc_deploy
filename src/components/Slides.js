import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../src/images/IMG_2759.jpg';
import image2 from '../../src/images/IMG_2790.jpg';
import image3 from '../../src/images/IMG_2995.jpg';
import image4 from '../../src/images/IMG_2756.jpg';
import image5 from '../../src/images/IMG_2995.jpg';
import image6 from '../../src/images/IMG_2756.jpg';
import skybg from '../../src/images/pgbg.jpg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>

        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>

        
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;