import { Text, Box, useColorModeValue, Center, Flex, Image } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from "react";

export default function WallpaperCarousel() {
  const slides = [
    {
      img: "https://sun9-78.userapi.com/impg/LjIeEz0ME5wW7IjXNinsEstnKlW1wWQfSyJ_uA/IaYGsj-CoZY.jpg?size=2560x1706&quality=95&sign=bdd53cb3634957565062b067d8a65faf&type=album",
    },
    {
      img: "https://sun9-52.userapi.com/impg/nqVab7xYhP-3KIEKUJAy7hxAm4rUoxWp3Z3_pA/oLYVoglGJW8.jpg?size=1600x1158&quality=95&sign=96d93862fab54114f7cd76a7af0d2ee4&type=album",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,// мах ширина
  };
  const SLIDES_INTERVAL_TIME = 3000;// время
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="auto"  >
        <Flex pos="relative" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md" height={{
              base: "100%", // 0-48em
              md: "50%", // 48em-80em,
              xl: "25%", // 80em+
            }}>
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                align={"center"}
                fit={"cover"}
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );

}


// гайт на затемнение в дисе
// 