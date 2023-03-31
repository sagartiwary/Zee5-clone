

import React from 'react';
// import { NavLink } from "react-router-dom";
import { RiVipCrownFill } from "react-icons/ri";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Icon,
  Container,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Kanjoos Makhichoos',
    //   text:
        // "",
      image:
        'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5326731/cover/1920x770e1ed4c7a72a141b0bcbacde5ba689f78.jpg',
    },
    {
      title: 'Comando Arjun',
    //   text:
        // "",
      image:
        'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234663/cover/1920x7708f2251201adf41988e18982f4dc2b7e6.jpg',
    },
    {
      title: 'Kundali Bhagaya',
    //   text:
    //     "",
      image:
        'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x770e0beb888151549ae9a2e44a81bdca399.jpg',
    },
    {
        title: 'Lost',
      //   text:
      //     "",
        image:
          'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299828/cover/1920x77023958a1676e340ddb2cd592012f3c263.jpg',
      },
      {
        title: 'United Kachhe',
      //   text:
      //     "",
        image:
          'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5327133/cover/1920x770338bcf4774bd448eb33f4342be4ab1a4.jpg',
      },

  ];

  return (
    <Box
      position={'relative'}
      height={'auto'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'440px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={card.image}>

            <Container 
            height="100px" 
            textAlign= "center"
            position="absolute"
            bottom= "78px"
            left="50px"
            // border= "1px solid black"
            >
              <Stack
                spacing={6}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading 
                // fontSize={{ base: '3xl', md: '4xl', lg: '5xl' } }
                color="white"
                fontSize= "38px"
                width="1000px"
                // border= "1px solid blue"
                textAlign= "left"
                >
                  {card.title}
                </Heading>
                {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text> */}
              </Stack>
              
              <Box 
                // border= "1px solid red"
                position="absolute"
                bottom= "-38px"
                left="16px"
                >
              <Button
                _hover={{ background: "#e7e7e7"}}
                border= "1px solid #3498db"
                backgroundColor= "transparent"
                color= "#3498db"
                >
                ▶ Watch
                </Button>
              <Button
                marginLeft="15px"
                fontSize={12}
                colorScheme="purple"
                _hover={{ background: "#8230E9", color: "white" }}
                leftIcon={<Icon as={RiVipCrownFill} width="18px" height="18px" />}
              >
                {/* <NavLink to={"/Payment"}>
                BUY PLAN</NavLink> */}

              </Button>
               </Box>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}


