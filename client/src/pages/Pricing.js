import React, { useRef,useEffect } from 'react'
import Layout from '../components/Layout/Layout'

const Pricing = () => {
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const firstc = useRef(null);
    const secondc = useRef(null);
    const thirdc = useRef(null);

    const scrollcheck = useRef(null)

    const firstFun = () => {
        first.current.classList.add('active');
        second.current.classList.remove('active');
        third.current.classList.remove('active');
        firstc.current.classList.add('clicked');
        secondc.current.classList.remove('clicked');
        thirdc.current.classList.remove('clicked');
    }
    const secondFun = () => {
        first.current.classList.remove('active');
        second.current.classList.add('active');
        third.current.classList.remove('active');
        firstc.current.classList.remove('clicked');
        secondc.current.classList.add('clicked');
        thirdc.current.classList.remove('clicked');
    }
    const thirdFun = () => {
        first.current.classList.remove('active');
        second.current.classList.remove('active');
        third.current.classList.add('active');
        firstc.current.classList.remove('clicked');
        secondc.current.classList.remove('clicked');
        thirdc.current.classList.add('clicked');
    }

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
            <div className="service-package">
                <div className="service-package-card-heading">Affordable Home Interiors Packages<br />Choose Your Home Type Below</div>
                <div className="choose-p-div">
                    <div className="choose-plan" ref={firstc} onClick={firstFun}></div>
                    <div className="choose-plan clicked" ref={secondc} onClick={secondFun}></div>
                    <div className="choose-plan" ref={thirdc} onClick={thirdFun}></div>
                </div>

                <div className="service-package-card-container">
                    <div className="service-package-card" ref={first} >
                        <div className="package-type">Basic</div>
                        <h1 className="package-name">1 BHK</h1>
                        <div className="package-price">Rs. 5.5 Lakh</div>
                        <div className="line"></div>
                        <div className="package-feature">Top Features</div>
                        <ul className="package-services">
                            <li><i className="ri-check-line y"></i> <span>Living Room</span></li>
                            <li><i className="ri-check-line y"></i> <span>Kitchen</span></li>
                            <li><i className="ri-check-line y"></i> <span>Bedroom-1</span></li>
                            <li><i className="ri-close-line n"></i> <span>Bedroom-2</span></li>
                            <li><i className="ri-close-line n"></i> <span>Bedroom-3</span></li>
                            <li><i className="ri-check-line y"></i> <span>Saftey Door</span></li>
                            <li><i className="ri-check-line y"></i> <span>TV unit</span></li>
                            <li><i className="ri-close-line n"></i> <span>Sofa</span></li>
                            <li><i className="ri-check-line y"></i> <span>Shoe Rack</span></li>
                            <li><i className="ri-check-line y"></i> <span>Modular Kitchen</span></li>
                            <li><i className="ri-check-line y"></i> <span>Wardrobe</span></li>
                            <li><i className="ri-check-line y"></i> <span>Bed</span></li>
                            <li><i className="ri-check-line y"></i> <span>Side Table</span></li>
                            <li><i className="ri-check-line y"></i> <span>Dressing Mirror</span></li>
                            <li><i className="ri-check-line y"></i> <span>Study Table</span></li>
                            <li><i className="ri-check-line y"></i> <span>False Ceiling</span></li>
                            <li><i className="ri-check-line y"></i> <span>LED Panel Lights</span></li>
                            <li><i className="ri-check-line y"></i> <span>Painting</span></li>
                        </ul>

                    </div>
                    <div className="service-package-card active" ref={second} >
                        <div className="popular-div">Popular</div>
                        <div className="package-type">Premium</div>
                        <h1 className="package-name">3 BHK</h1>
                        <div className="package-price pre">Rs. 9.5 Lakh</div>
                        <div className="line"></div>
                        <div className="package-feature">Top Features</div>
                        <ul className="package-services">
                            <li><i className="ri-check-line n"></i> <span>Living Room</span></li>
                            <li><i className="ri-check-line n"></i> <span>Kitchen</span></li>
                            <li><i className="ri-check-line n"></i> <span>Bedroom-1</span></li>
                            <li><i className="ri-check-line n"></i> <span>Bedroom-2</span></li>
                            <li><i className="ri-check-line n"></i> <span>Bedroom-3</span></li>
                            <li><i className="ri-check-line n"></i> <span>Saftey Door</span></li>
                            <li><i className="ri-check-line n"></i> <span>TV unit x2</span></li>
                            <li><i className="ri-check-line n"></i> <span>Sofa (3 seater)</span></li>
                            <li><i className="ri-check-line n"></i> <span>Shoe Rack</span></li>
                            <li><i className="ri-check-line n"></i> <span>Modular Kitchen</span></li>
                            <li><i className="ri-check-line n"></i> <span>Wardrobe x3</span></li>
                            <li><i className="ri-check-line n"></i> <span>Bed x3</span></li>
                            <li><i className="ri-check-line n"></i> <span>Side Table</span></li>
                            <li><i className="ri-check-line n"></i> <span>Dressing Mirror x3</span></li>
                            <li><i className="ri-check-line n"></i> <span>Study Table x2</span></li>
                            <li><i className="ri-check-line n"></i> <span>False Ceiling</span></li>
                            <li><i className="ri-check-line n"></i> <span>LED Panel Lights</span></li>
                            <li><i className="ri-check-line n"></i> <span>Painting</span></li>
                        </ul>
                    </div>
                    <div className="service-package-card" ref={third} >
                        <div className="package-type">Standard</div>
                        <h1 className="package-name">2 BHK</h1>
                        <div className="package-price">Rs. 7.5 Lakh</div>
                        <div className="line"></div>
                        <div className="package-feature">Top Features</div>
                        <ul className="package-services">
                        <li><i className="ri-check-line y"></i> <span>Living Room</span></li>
                            <li><i className="ri-check-line y"></i> <span>Kitchen</span></li>
                            <li><i className="ri-check-line y"></i> <span>Bedroom-1</span></li>
                            <li><i className="ri-check-line y"></i> <span>Bedroom-2</span></li>
                            <li><i className="ri-close-line n"></i> <span>Bedroom-3</span></li>
                            <li><i className="ri-check-line y"></i> <span>Saftey Door</span></li>
                            <li><i className="ri-check-line y"></i> <span>TV unit x2</span></li>
                            <li><i className="ri-check-line y"></i> <span>Sofa (3 Seater)</span></li>
                            <li><i className="ri-check-line y"></i> <span>Shoe Rack</span></li>
                            <li><i className="ri-check-line y"></i> <span>Modular Kitchen</span></li>
                            <li><i className="ri-check-line y"></i> <span>Wardrobe x2</span></li>
                            <li><i className="ri-check-line y"></i> <span>Bed x2</span></li>
                            <li><i className="ri-check-line y"></i> <span>Side Table</span></li>
                            <li><i className="ri-check-line y"></i> <span>Dressing Mirror x2</span></li>
                            <li><i className="ri-check-line y"></i> <span>Study Table x1</span></li>
                            <li><i className="ri-check-line y"></i> <span>False Ceiling</span></li>
                            <li><i className="ri-check-line y"></i> <span>LED Panel Lights</span></li>
                            <li><i className="ri-check-line y"></i> <span>Painting</span></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="material-cost-container">
                <div className="material-cost-head">Material Cost</div>

                <div className="material-cost-title">Luster paint</div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 35</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 35</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 35</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 38</div>
                    </div>
                </div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Surat</div>
                        <div className="city-price">Rs. 32</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Vadodara</div>
                        <div className="city-price">Rs. 32</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Ahemdabad</div>
                        <div className="city-price">Rs. 32</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Hyderabad</div>
                        <div className="city-price">Rs. 35</div>
                    </div>
                </div>

                <div className="material-cost-title">Texture paint</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 120</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 110</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 120</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 120</div>
                    </div>
                </div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Surat</div>
                        <div className="city-price">Rs. 100</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Vadodara</div>
                        <div className="city-price">Rs. 100</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Ahemdabad</div>
                        <div className="city-price">Rs. 100</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Hyderabad</div>
                        <div className="city-price">Rs. 120</div>
                    </div>
                </div>

                <div className="material-cost-title">Modular Wardrobe</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 1650</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 1650</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 1700</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 1700</div>
                    </div>
                </div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Surat</div>
                        <div className="city-price">Rs. 1650</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Vadodara</div>
                        <div className="city-price">Rs. 1650</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Ahemdabad</div>
                        <div className="city-price">Rs. 1650</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Hyderabad</div>
                        <div className="city-price">Rs. 1700</div>
                    </div>
                
                
                </div>

                <div className="material-cost-title">Modular Bed</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 1550</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 1500</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 1550</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 16500</div>
                    </div>
                </div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Surat</div>
                        <div className="city-price">Rs. 1450</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Vadodara</div>
                        <div className="city-price">Rs. 1450</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Ahemdabad</div>
                        <div className="city-price">Rs. 1500</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Hyderabad</div>
                        <div className="city-price">Rs. 1550</div>
                    </div>
                </div>


                <div className="material-cost-title">Gypsum False Ceiling</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 90</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 90</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 90</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 90</div>
                    </div>
                </div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Surat</div>
                        <div className="city-price">Rs. 80</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Vadodara</div>
                        <div className="city-price">Rs. 80</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Ahemdabad</div>
                        <div className="city-price">Rs. 80</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Hyderabad</div>
                        <div className="city-price">Rs. 90</div>
                    </div>
                </div>

                <div className="material-cost-title">Acrylic False Ceiling</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 160</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 160</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 160</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 160</div>
                    </div>
                </div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Surat</div>
                        <div className="city-price">Rs. 150</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Vadodara</div>
                        <div className="city-price">Rs. 150</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Ahemdabad</div>
                        <div className="city-price">Rs. 150</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Hyderabad</div>
                        <div className="city-price">Rs. 160</div>
                    </div>
                </div>

                <div className="material-cost-title">PVC False ceiling</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 110</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 110</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 120</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 120</div>
                    </div>
                </div>

                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Surat</div>
                        <div className="city-price">Rs. 110</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Vadodara</div>
                        <div className="city-price">Rs. 110</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Ahemdabad</div>
                        <div className="city-price">Rs. 110</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Hyderabad</div>
                        <div className="city-price">Rs. 120</div>
                    </div>
                </div>


                <div className="material-cost-title">10mm Toughened glass partition</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 300</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 300</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 300</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 300</div>
                    </div>
                </div>

                <div className="material-cost-title">12mm Toughened glass partition</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 325</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 325</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 325</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 325</div>
                    </div>
                </div>

                <div className="material-cost-title">10mm Grid glass partition</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 425</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 425</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 425</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 425</div>
                    </div>
                </div>

                <div className="material-cost-title">12mm Grid glass partition</div>
                <div className="material-line"></div>
                <div className="material-cost-div">
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Mumbai</div>
                        <div className="city-price">Rs. 450</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Pune</div>
                        <div className="city-price">Rs. 450</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Delhi NCR</div>
                        <div className="city-price">Rs. 450</div>
                    </div>
                    <div className="material-city">
                        <div className="circle">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div className="city-name">Bengaluru</div>
                        <div className="city-price">Rs. 450</div>
                    </div>
                </div>


            </div>

            </div>

        </Layout>
    )
}

export default Pricing