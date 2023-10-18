import React, { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout/Layout'
import Card1 from '../components/cards/Card1'
import Card2 from '../components/cards/Card2'
import Carousel from '../components/Carousel'
import { ToastContainer } from 'react-toastify';
import { Rate } from 'antd';
import axios from 'axios'


const Home = () => {

  const cards = [
    <Card1 />,
    <Card1 />,
    <Card1 />,
    // Add more card objects as needed
  ];

  const images = [
    "/images/Working-desk.jpg",
    "/images/baffle-ceiling.jpg",
    "/images/glazing-glass.jpg",
  ];

  const images2 = [
    "/images/hall.jpg",
    "/images/img4.jpg",
    "/images/bedroom-design.jpg",
  ];

  const images3 = [
    "/images/gardenwork.jpg",
    "/images/gardenwork1.jpg",
    "/images/gardenwork2.jpg",
  ];

  const images4 = [
    "/images/wall.jpg",
    "/images/textureimage.jpeg",
    "/images/texture.jpg",
  ];

  const [isSpread, setIsSpread] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const WhatsApp = useRef();
  const [text, setText] = useState("");


  const handleContainerHover = () => {
    setIsSpread(true);
  };


  const openChat = () => {
    WhatsApp.current.classList.add('open-chat');
  }

  const closeChat = () => {
    WhatsApp.current.classList.remove('open-chat');
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHide(true)
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);


  //reviews
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getReviews = async () => {
    try {
      const res = await axios.get('/api/v1/review/get-reviews')
      if (res.data.success) {
        setReviews(res.data.reviews)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])





  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className='wa-div'>
        <div ref={WhatsApp} className='chat-bot'>
          <img src='/images/xw.png' alt='x' className='x' onClick={closeChat}></img>

          <div className="type">

            <input type='text' name='text' value={text} placeholder='Type a message..' onChange={(e) => setText(e.target.value)}></input><a aria-label="Chat on WhatsApp" href={`https://wa.me/9373018189?text=${text}`} > <img src='/images/sendbtn.png' alt='send' className='send-btn'></img></a >
          </div>
        </div>
        <img alt="Chat on WhatsApp" src="/images/WA.png" onClick={openChat} className='wa-img' />

      </div>

      <main className='home'>

        {/* hero */}
        <div className="screen">
          <img src='/images/pink_cut.png' alt='img' className={`pink-img ${isHide ? 'hide' : ''}`} />
          <img src='/images/blue_cut.png' alt='img' className='blue-img' />
          <div className="carousel">
            <Carousel />
          </div>

          <div className="brand">
            <img src='/images/name.png' alt='logo' />
            {/* <span><img src='/images/logo.png' /><span className='ira'>Iracle</span></span> */}
            <p>Don't just furnish the space...Make it comfortable!!</p>
          </div>

        </div>
        <div className="services">
          <div className="service-title">
            <h1>Our Services</h1>
          </div>
          <div
            onMouseEnter={handleContainerHover}
            onMouseLeave={() => setIsSpread(false)}
            className={`row1 ${isSpread ? 'spread' : ''} `}>
            {cards.map((card, index) => (
              <div
                className={`cardc service-card${index}`}
                style={{ '--index': index }}
                key={card.id}
              >
                <Card1 title={`${index}`} img={`img${index + 3}`} />
              </div>
            ))}
          </div>

          <div className="exp-m">
            <a href='/services'>
              Explore more..
            </a>
          </div>


        </div>


        <div className="work">
          {/* <div className='left-tri'></div>
          <div className='right-tri'></div> */}
          <div className="work-title">
            <h1>Our Work</h1>
          </div>
          <div className="work-container">
            <div className='work-item item1'>
              <Card2 title={`Commercial Interior Design`} images={images} description={`Transforming commercial spaces with inspiring designs. Offices that inspire, retail that welcomes. Collaborate with us to redefine your business's interior and reflect your brand's ethos.`} className='work-img' />
            </div>
            <div className='work-item item2'>
              <Card2 title={`Residential Interiors`} images={images2} description={`Personalized interiors mirroring your story. Curating spaces that evoke comfort and elegance, crafting homes that reflect your lifestyle. Join us in reimagining interiors and elevate your living experience.`} className='work-img' />
            </div>
            <div className='work-item item3'>
              <Card2 title={`GardenWork Outdoor Spaces`} images={images3} description={`Nature and design intertwined. Craft enchanting outdoor havens, from lush gardens to serene patios. Let nature's elegance flourish at your doorstep with GardenWork's transformative landscapes.`} className='work-img' />
            </div>
            <div className='work-item item4'>
              <Card2 title={`Paint Interior Design`} images={images4} description={` Walls as canvases. Transform spaces with color's power. Subtle to bold, redefine ambiances and moods. Let color tell your story with Paint Interior Design.`} className='work-img' />
            </div>
            {/* <div className='work-item item4'><Carousel2/></div> */}
          </div>
          <div className="exp-m">
            <a href='/projects'>
              Explore more..
            </a>
          </div>

        </div>
        <div className="reviews">
          <div className="review-title">
            <h1>Reviews</h1>

          </div>
          <div className="review-container">
            <div className="review-item">
              {
                loading ? <h1>Loading...</h1> : error ? <h1>Error...</h1> : reviews.map((review) => (
                  <div className="review-card" key={review._id}>
                    <div className="review-card-header">
                      <img className='review-img' src='/images/user.png' alt='user' />
                      <h3>{review.name}</h3>
                    </div>
                    <div className="review-card-body">
                      <p>{review.feedBack}</p>
                    </div>
                    <div className="review-card-footer">
                      <div className="rate">
                        <Rate allowHalf defaultValue={review.value} disabled />

                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>

        </div>
      </main>
    </Layout>
  )
}

export default Home