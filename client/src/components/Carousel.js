import React from 'react';
import '../index.css'


const Carousel = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>

                {/* <div className="carousel-inner mob">
                    <div className="carousel-item active" data-bs-interval="4000">
                        
                           <img src="/images/mob1.jpg" className="d-block w-100 carousel-img" alt="..." />
                        
                        
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                    <img src="/images/mob2.jpg" className="d-block w-100 carousel-img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                    <img src="/images/mob3.jpg" className="d-block w-100 carousel-img" alt="..." />
                    </div>
                </div> */}

                <div className="carousel-inner web">
                    <div className="carousel-item active" data-bs-interval="4000">

                        <img src="/images/img1.jpg" className="carousel-img" alt="..." />

                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="/images/image.webp" className="carousel-img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="/images/main.jpg" className="carousel-img" alt="..." />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    );
}

export default Carousel;