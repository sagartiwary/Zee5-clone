import React from "react";
import Slider from "react-slick";
 import {Box,Image} from '@chakra-ui/react'
export default function MultipleItems ({newImg}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
       <Box>
        <Image src={newImg} alt="sagar" m="auto"/>
       </Box>

        </Slider>
      </div>
    );
  }

