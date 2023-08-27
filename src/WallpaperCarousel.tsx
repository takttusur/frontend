/* eslint-disable import/no-extraneous-dependencies */
import { Text, Box, useColorModeValue, Center } from '@chakra-ui/react';

export default function WallpaperCarousel() {
  return (
    <>
        <Box borderWidth='1px' borderColor='black' bg={useColorModeValue('white', 'gray.200')} h={400}>
          <Center>
            <Box display="flex" alignItems="center" h={400}>
              <Text> WallpaperCarousel </Text>  
            </Box>
          </Center>
        </Box>
    </>
  );
}