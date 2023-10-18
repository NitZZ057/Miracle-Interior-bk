import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import '../../index.css'
import Carousel2 from '../Carousel2';

export default function App({ title, images,description }) {

  return (
    <MDBRow className=' g-4'>
      <MDBCol >
        
        <MDBCard className='img-class card2'>
          <div className="img-div">
            {/* <MDBCardImage
              src={`/images/${img}`}
              alt='...'
              position='top'
            /> */}
            <Carousel2 images={images}/>
          </div>
          <div className="desc-div">
            <MDBCardBody>
              <MDBCardTitle className='card-title'>{title}</MDBCardTitle>
              <MDBCardText>
                {description}
              </MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>
  );
}