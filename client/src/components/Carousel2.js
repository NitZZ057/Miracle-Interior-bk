import React from 'react'
import '../styles/Carousel.css'
import SimpleImageSlider from "react-simple-image-slider";

const Carousel2 = ({images}) => {


    // const [index,setindex] = useState(0);


    // const [seconds,setSeconds] = useState(0);

    // const handleAutoSlide = () =>{
    //     setindex((index+1)%images.length)
    // }
    // useEffect(()=>{
    //     const timer = setInterval(handleAutoSlide,3000)


    // },[])


    // console.log(seconds);
    return (
        <>
            

            {/* <div className="carousel2-main"> */}
            <div className="carousel2-container">

                <SimpleImageSlider
                    width='90%'
                    height='90%'
                    images={images}
                    showBullets={true}
                    showNavs={false}
                    autoPlay={true}
                    autoPlayDelay={3}
                    navStyle={2}
                />
                {/* <img className='car2-img' src={images[index]}  alt='img'/>
                <button className='slider-next' onClick={()=>{
                    setindex((index+1)%images.length);
                }}><img className='slider-next-img' width={20} src='/images/next.png' alt='img'/></button> */}
            </div>


            {/* </div> */}




        </>
    )
}

export default Carousel2

