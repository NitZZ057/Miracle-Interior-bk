import React,{useEffect, useRef} from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    const scrollcheck = useRef(null)
    //get scroll amount

    useEffect(() => {


    const ele = scrollcheck.current;
    
    ele.addEventListener('scroll', () => {
        let scroll = ele.scrollTop;
        let aboutBack = document.querySelector('.about-back');

        // console.log(scroll);
        if (scroll > 0) {
            aboutBack.style.transform = `translateX(${-(scroll * 1.2)}px)`;
        }
    })

    return () => ele.removeEventListener('scroll', () => {
        let scroll = ele.scrollTop;
        let aboutBack = document.querySelector('.about-back');

        // console.log(scroll);
        if (scroll > 0) {
            aboutBack.style.transform = `translateX(${-(scroll * 1.2)}px)`;
        }
    });



 }, []);

    return (
        <Layout>
            <div ref={scrollcheck} className="about-page-body">
            <div className="about-back"></div>
            <div  className="about-main">
                
                <div className="about-container">
                    <div className="about-text">
                        <h1 className='about-us-title'>Our Design Philosophy<span className='reveal'> </span></h1>
                        <p>
                            "At Miracle Interior, we believe in the transformative power of design. Our philosophy is rooted in creating harmonious, functional, and timeless spaces that reflect our clients' unique visions. Through collaboration, attention to detail, and a holistic approach, we curate aesthetically captivating environments that enhance daily experiences. We embrace sustainability, value open communication, and strive to exceed expectations. Join us on a design journey where dreams become reality."
                        </p>
                    </div>
                    <div className="about-img">
                        {/* <img src='/images/pink.png' alt='img' className='pinkspot-img' />
                        <img src='/images/dot.png' alt='img' className='dot-img' />
                        <img src='/images/women.png' alt='img' className='women-img' /> */}

                        <img src='/images/mk22.png' alt='img' className='ceo' />
                        <figcaption>Mr. Mayur Kedar (Founder)</figcaption>

                    </div>

                </div>
                <div className="about-team">
                    <div className="about-team-title">Meet Our Team</div>
                    <div className="team">
                        <div className="team2">
                        <img src="/images/mkw.jpg" alt="" className='team1' />
                        <figcaption>Ms. Preeti Kedar (CEO) </figcaption>
                        </div>
                        <div className="team2">
                        <img src="/images/team2.jpeg" alt="" className='team1' />
                        <figcaption>Mr. Alice Doe</figcaption>
                        </div>
                        
                    </div>
                </div>

            </div>
            </div>
        </Layout>
    )
}

export default About