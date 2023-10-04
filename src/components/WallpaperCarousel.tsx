import { Text, Box, useColorModeValue, Center, Flex, Image } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from "react";

export default function WallpaperCarousel() {
  const slides = [
    {
      img: "https://sun9-78.userapi.com/impg/LjIeEz0ME5wW7IjXNinsEstnKlW1wWQfSyJ_uA/IaYGsj-CoZY.jpg?size=2560x1706&quality=95&sign=bdd53cb3634957565062b067d8a65faf&type=album",
    },
    {
      img: "https://psv4.userapi.com/c909618/u252831914/docs/d49/7dad8da2ce2d/IaYGsj-CoZY.jpg?extra=u91_Zr5yVpefJEoLk4DJC04QtZxuNcj2w-A8t2cC7gqnbdWl5JB234500zxGTLyDkiqkGr9yus2zWfMykgZ9DoyfwiuxLzyRTCXo6l1iY-b2fIEk1Bsk7vfWJr2FA1NytsMHOqhNj4Hzd4I5C7k9omz1RA",
    },
    {
      img: "https://psv4.userapi.com/c909518/u252831914/docs/d11/0667fc6c615c/oLYVoglGJW8.jpg?extra=Zbpap9YgMbUPtL5HQ-pKlAGi4T9kDgbl4roxDPMcIIghp93acgDL-JBFjvgaNtOR8EOdkUCBZEHylMjKqZH-kN13sPnr0dn5wstyu6cAY0wNXtXxCeqtHWVIJJ1oINdj3rhlg1My6-TOfoGzpYk_t09zFg",
    },
    {
      img: "https://psv4.userapi.com/c909228/u252831914/docs/d46/2a2adae4f5cb/oLYVoglGJW8122.png?extra=QA8UyM3qsbRTZcjcF0YkMxzt5ZAPoNCCKeTBGUR2Kk_rzIRsRJ072M4_6U9XyCXYRoONsJcbm_eVHK_nj50tL4O1SoJNTLarrp9hRT60QKlDRr1QZAM_dfwgOazk97tS2c5lbfD6CR8l2d1ejnmeM83PQQ",
    },
    {
      img: "https://sun9-52.userapi.com/impg/nqVab7xYhP-3KIEKUJAy7hxAm4rUoxWp3Z3_pA/oLYVoglGJW8.jpg?size=1600x1158&quality=95&sign=96d93862fab54114f7cd76a7af0d2ee4&type=album",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
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
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
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
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );

}