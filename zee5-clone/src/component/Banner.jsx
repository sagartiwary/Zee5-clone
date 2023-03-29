import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

export default function SimpleSlider()  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <Slider {...settings}>
          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234663/cover/1920x7708f2251201adf41988e18982f4dc2b7e6.jpg"
              alt="sagar"
              m="auto"
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5326731/cover/1920x7703e4538fc4fa8454b93f54ac1957833f0.jpg"
              alt="sagar"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5281750/cover/1920x77092472069ec2140cb8045f4851d4c9c3c.jpg"
              alt="sagar"
              m="auto"
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299828/cover/1920x77023958a1676e340ddb2cd592012f3c263.jpg"
              alt="sagar"
              m="auto"
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x770e0beb888151549ae9a2e44a81bdca399.jpg"
              alt="sagar"
              m="auto"
            />
          </Box>

          <Box>
            <Image
              src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-127/cover/1920x77014246e9f1b864bd8996c9a1cb54f6ad3.jpg"
              alt="sagar"
              m="auto"
            />
          </Box>
        </Slider>
      </div>
    );
  }


