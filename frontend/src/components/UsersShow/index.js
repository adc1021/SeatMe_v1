import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import NavBar from "../NavBar";

const UsersShow = () => {
  const { userId } = useParams();

  return (

    <>
    <NavBar />
    <h1>Hello from the Users Show Page</h1>

    </>
  )
}

export default UsersShow;
