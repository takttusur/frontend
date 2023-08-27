import { Text, Box, useColorModeValue, Center } from '@chakra-ui/react';

export default function News() {
  return (
    <Box borderWidth='1px' borderColor='black' bg={useColorModeValue('white', 'gray.200')} h={400}>
        <Center>
            <Box display='flex' alignItems='center' w='90%' h={398} bg='gray'>
                <Box display="flex" alignItems="center" w='100%'>
                    <Text w='100%' textAlign='center'> News </Text>
                </Box>         
            </Box>
        </Center>            
    </Box>
  );
}