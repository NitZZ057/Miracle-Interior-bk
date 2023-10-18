import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../../styles/services.css'

const Footer = () => {
  return (
    <>
      <div className="foot">
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted foot'>
          <section className='d-flex justify-content-center justify-content-lg-between border-bottom social-links-div'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>

            <div className='social-links'>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
                <i className="ri-facebook-fill"></i>
              </a>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
                <i className="ri-twitter-fill"></i>
              </a>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
                <i className="ri-google-fill"></i>
              </a>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
                <i className="ri-instagram-line"></i>
              </a>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" />
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Miracle Interior
                  </h6>
                  <p>
                   With an emphasis on meticulous detailing and personalized solutions, we transform ordinary spaces into extraordinary living experiences.
                  </p>
                </MDBCol>

                {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <i className="ri-home-4-line"></i> FIA Emrald Building, Near Sundaram school Palghar
                  </p>
                  <p>
                    <i className="ri-mail-line"></i> mayur@miracleinterior.co.in
                  </p>
                  <p>
                    <i className="ri-phone-line"></i> +91 93730 18189
                  </p>
                  <p>
                    <i className="ri-phone-line"></i> +91 77980 98797
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <span>© 2023 Copyright: </span>
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              Miracle Interior
            </a>
          </div>
        </MDBFooter>
      </div>
    </>
  )
}

export default Footer