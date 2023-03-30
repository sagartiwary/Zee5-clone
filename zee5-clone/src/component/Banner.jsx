import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";






export default function SimpleSlider()  {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
      
    }
    return (
      <div>
        <Slider {...settings}>
          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/cover/1920x7702e2ba8da340346f9b2256075cd4a39f2.jpg"
              alt="sagar"
              m="auto"
              // w={1150}
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234663/cover/1920x7708f2251201adf41988e18982f4dc2b7e6.jpg"
              alt="sagar"
              m="auto"
              // w={1150}
            />
          </Box>
          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5311140/cover/1920x7702288c19af62b45bca7b65d8f277922cd.jpg"
              alt="sagar"
              m="auto"
              // w={1150}
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299828/cover/1920x77023958a1676e340ddb2cd592012f3c263.jpg"
              alt="sagar"
              m="auto"
              // w={1150}
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299828/cover/1920x77023958a1676e340ddb2cd592012f3c263.jpg"
              alt="sagar"
              m="auto"
              // w={1150}
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x770e0beb888151549ae9a2e44a81bdca399.jpg"
              alt="sagar"
              m="auto"
              // w={1150}
            />
          </Box>
        </Slider>
      </div>
    );
  }


