import { Text, Box, Flex, Image } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import "./WallpaperCarousel.css";

interface IWallpaperCaruselProps{
  slides:string[]
}

export default function WallpaperCarousel(props:IWallpaperCaruselProps) {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = props.slides.length;
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
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Flex w="auto">
        <Flex pos="relative" w="full" {...carouselStyle}>
          {props.slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md" height={{
              base: "100%", // 0-48em
              md: "50%", // 48em-80em,
              lg: "40%", // 48em-80em,
               // 80em+
            }}>
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap">
                {sid + 1} / {slidesCount}
              </Text>
              <Image 
                className='dark-image'
                src={slide}
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


