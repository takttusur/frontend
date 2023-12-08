import {Text, Box, Flex, Image} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import "./WallpaperCarousel.css";

interface IWallpaperCaruselProps {
    slides: string[]
}

interface IWallpaperCaruselState {
    currentSlide: number,
    stopSliding: boolean
}

export default function WallpaperCarousel(props: IWallpaperCaruselProps) {

    const [state, setState] = useState<IWallpaperCaruselState>({
        currentSlide: 0,
        stopSliding: false
    });

    const slidesCount = props.slides.length;
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${state.currentSlide * 100}%`,// мах ширина
    };
    const SLIDES_INTERVAL_TIME = 3000;// время
    const ANIMATION_DIRECTION = "right";
    useEffect(() => {
        const prevSlide = () => {
            setState((s) =>
                ({
                    ...s,
                    currentSlide: s.stopSliding ? s.currentSlide : s.currentSlide === 0 ? slidesCount - 1 : s.currentSlide - 1
                })
            );
        };

        const nextSlide = () => {
            setState((s) =>
                ({
                    ...s,
                    currentSlide: s.stopSliding ? s.currentSlide : s.currentSlide === slidesCount - 1 ? 0 : s.currentSlide + 1
                })
            );
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
            onMouseOver={() => {
                setState(s => ({...s, stopSliding: true}))
            }}
            onMouseOut={() => {
                setState(s => ({...s, stopSliding: false}))
            }}
            maxHeight={{
                base: "20em",
                md: "30em",
                lg: "50em"
            }}>
            <Flex w="auto">
                <Flex pos="relative" w="full" {...carouselStyle}>
                    {props.slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
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


