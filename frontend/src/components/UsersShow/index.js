import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const UsersShow = () => {
  const userId = useParams();
  console.log(userId)
  return (

    <>
    <h1>Hello from the Users Show Page</h1>
    <CarouselProvider naturalSlideWidth={100}
      naturalSlideHeight={125} totalSlides={3}>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
              <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
    </>
  )
}

export default UsersShow;
