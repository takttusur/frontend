/* eslint-disable import/no-extraneous-dependencies */
import { Text, Box, useColorModeValue, Flex, Center } from '@chakra-ui/react';

export default function WallpaperCarousel() {
  return (
    <>
        <Box borderWidth='1px' borderColor='black' bg={useColorModeValue('white', 'gray.200')} h={400}>
          <Flex>
            <Center>
              <Text> WallpaperCarousel </Text>
            </Center>
          </Flex>
        </Box>
    </>
  );
}