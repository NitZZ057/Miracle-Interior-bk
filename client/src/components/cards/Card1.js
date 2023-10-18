import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';

export default function App({title,img}) {
  const titles = [
    'Interior Paint',
    'Kitchen Work',
    'Ceiling work'
  ]
  return (
    <MDBCard>
      <MDBCardBody className='img-class'>
        <MDBCardTitle> {titles[title]}</MDBCardTitle>
        {/* <MDBCardSubTitle>Card subtitle</MDBCardSubTitle> */}
        <MDBCardText >
          <img src={`/images/${img}.jpg`} alt='img' className='card-img'/>
        </MDBCardText>
        {/* <MDBCardLink href='#'>Card link</MDBCardLink>
        <MDBCardLink href='#'>Another link</MDBCardLink> */}
      </MDBCardBody>
    </MDBCard>
  );
}