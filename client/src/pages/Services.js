import React, {  } from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/Services2.css'
import 'remixicon/fonts/remixicon.css'

const Services = () => {

  return (
    <Layout>
      <div className="service-wrapper">
        <div className="service-head">
          <div className="service-head-title">
            <h1>Designing Dreams</h1>
            <p>" Elevating Spaces, Inspiring &nbsp;&nbsp;Lives, <br/>&nbsp;&nbsp;Where Imagination Meets &nbsp;&nbsp;Exceptional Design with &nbsp;&nbsp;Passion."</p>
          </div>
        </div>
        <div className="service2-container">
          <div className="service2-title">
            <h1 className="service-heading">OUR <span className='half-title'>SERVICE</span></h1>

          </div>
          <div className="service2-content grid">
            <div className="service-card">
              <div className="service-img-box">
                <img src='/images/wallp.jpg' alt='img' className='service-img' />
              </div>

              <div className="service-desc-box">

                <ul>
                  <li>1. Texture Paint</li>
                  <li>2. Plain Paint</li>
                </ul>

              </div>
              <h2 className="service-name">
                Paint Work
              </h2>

            </div>
            <div className="service-card">
              <div className="service-img-box">
                <img src='/images/mod-kitch.jpg' alt='img' className='service-img' />
              </div>

              <div className="service-desc-box">

                <ul>
                  <li>1. basic Furniture Work</li>
                  <li>2. Regular Furniture Work</li>
                  <li>3. Premium Furniture Work</li>
                </ul>

              </div>
              <h2 className="service-name">
                Modular Kitchen/Furniture
              </h2>

            </div>
            <div className="service-card">
              <div className="service-img-box">
                <img src='/images/gyp-ceil.jpeg' alt='img' className='service-img' />
              </div>

              <div className="service-desc-box">

                <ul>
                  <li>1. Gypsum Plain </li>
                  <li>2. Gypsum Design</li>
                  <li>3. PVC Design</li>
                </ul>

              </div>
              <h2 className="service-name">
                Ceiling Work
              </h2>

            </div>
            <div className="service-card">
              <div className="service-img-box">
                <img src='/images/wooden-partition.jpg' alt='img' className='service-img' />
              </div>

              <div className="service-desc-box">

                <ul>
                  <li>1. Regular Laminate</li>
                  <li>2. Regular Premium</li>
                </ul>

              </div>
              <h2 className="service-name">
                Wooden Partition
              </h2>

            </div>
            <div className="service-card">
              <div className="service-img-box">
                <img src='/images/glazing.jpeg' alt='img' className='service-img' />
              </div>

              <div className="service-desc-box">

                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi vero quaerat voluptatem temporibus reiciendis perferendis corrupti quia, delectus odit quod deserunt omnis sed quam eum laudantium neque ex ipsa!</p> */}
                <ul>
                  <li>1. Glazing Glass</li>
                  <li>2. Tuffen Glass</li>
                  <li>3. Regular Glass</li>
                </ul>

              </div>
              <h2 className="service-name">
                Glass Work
              </h2>

            </div>

          </div>
        </div>
      </div>


    </Layout>
  )
}

export default Services