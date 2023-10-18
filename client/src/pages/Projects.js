import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/services.css'
import Carousel2 from '../components/Carousel2';

const Projects = () => {
  const imgRef = useRef([]);
  const txtRef = useRef([]);

  const images = [
    "/images/office2.jpg",
    "/images/office-ceiling.jpg",
    "/images/office-glass.jpg",
  ];

  const images2 = [
    "/images/bed.jpeg",
    "/images/kitchen1.jpg",
    "/images/tv.jpg",
  ];

  const images3 = [
    "/images/garden.webp",
    "/images/garden1.jpg",
    "/images/gardenwork2.jpg",
];

  const images4 = [
    "/images/wall3.png",
    "/images/wall2.png",
    "/images/wall.png",
];

  useEffect(() => {
    const observer = new IntersectionObserver((entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        } else {
          entry.target.classList.remove('animate')
        }
      });
    }));

    imgRef.current.forEach((ref) => {
      observer.observe(ref);
    });

    const observer1 = new IntersectionObserver((entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate1')
        } else {
          entry.target.classList.remove('animate1')
        }
      });
    }));

    txtRef.current.forEach((ref) => {
      observer1.observe(ref);
    });

    return () => {
      observer.disconnect();
      observer1.disconnect();
    }
  }, []);


  return (
    <Layout>
      <div className="wrapper">
        <div className="project-head">
          {/* <img src='/images/wall3.png' className="background" alt='img'></img>
          <img src='/images/floor1.png' className="foreground" alt='img'></img>
          <img src='/images/plant.png' className="foreground2" alt='img'></img>
          <h1 className="project-title">Our Work</h1> */}
          <div className="project-head-title">
            <h1>Explore Our Portfolio</h1>
            <p>"We bring spaces to life through creative expertise<br/> and personalized collaboration."</p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-content">
            <div ref={(ref) => (imgRef.current[0] = ref)} className="service-img-div">
              {/* <img src='/images/img5(2).jpg' alt='img'/> */}
              <Carousel2 images={images} className='pro-car'/>
            </div>
            <div ref={(ref) => (txtRef.current[0] = ref)} className="service-txt-div">
              <h1 style={{color:'white'}}>Commercial Interior Design</h1>
              <p>Transforming commercial spaces with inspiring designs. Offices that inspire, retail that welcomes. Collaborate with us to redefine your business's interior and reflect your brand's ethos.</p>
              {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque commodi vel quibusdam odio natus quo doloremque delectus? Ipsa maiores aperiam quae nisi vitae, tempore illum, corrupti beatae voluptatum nobis harum?</p> */}
            </div>

          </div>
          <div className="service-content">
            <div ref={(ref) => (txtRef.current[1] = ref)} className="service-txt-div-left">
              <h1 style={{color:'white'}}>Residential Interiors</h1>
              <p>Personalized interiors mirroring your story. Curating spaces that evoke comfort and elegance, crafting homes that reflect your lifestyle. Join us in reimagining interiors and elevate your living experience.</p>
            </div>
            <div ref={(ref) => (imgRef.current[1] = ref)} className="service-img-div">

              {/* <img src='/images/img5(2).jpg' alt='img'/> */}
              <Carousel2 images={images2} />
            </div>

          </div>
          <div className="service-content">
            <div ref={(ref) => (imgRef.current[2] = ref)} className="service-img-div">
              {/* <img src='/images/img5(2).jpg' alt='img'/> */}
              <Carousel2 images={images3} />

            </div>
            <div ref={(ref) => (txtRef.current[2] = ref)} className="service-txt-div">
              <h1 style={{color:'white'}}>Gardenwork Outdoor spaces</h1>
              <p>Nature and design intertwined. Craft enchanting outdoor havens, from lush gardens to serene patios. Let nature's elegance flourish at your doorstep with GardenWork's transformative landscapes.</p>
            </div>
          </div>
          <div className="service-content">
            <div ref={(ref) => (txtRef.current[3] = ref)} className="service-txt-div-left">
              <h1 style={{color:'white'}}>Paint Interior Design</h1>
              <p>Walls as canvases. Transform spaces with color's power. Subtle to bold, redefine ambiances and moods. Let color tell your story with Paint Interior Design.</p>
            </div>
            <div ref={(ref) => (imgRef.current[3] = ref)} className="service-img-div">
              {/* <img src='/images/img5(2).jpg' alt='img'/> */}
              <Carousel2 images={images4} />

            </div>

          </div>
          {/* <div className='work-item item2'>
            <Card2 title={`Residential Interiors`} images={images2} description={`Personalized interiors mirroring your story. Curating spaces that evoke comfort and elegance, crafting homes that reflect your lifestyle. Join us in reimagining interiors and elevate your living experience.`} className='work-img' />
          </div> */}

        </div>
      </div>
    </Layout>
  )
}

export default Projects