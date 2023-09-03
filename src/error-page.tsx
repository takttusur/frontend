import { useRouteError } from 'react-router-dom';
import { Box, Center, Text, useColorModeValue } from '@chakra-ui/react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box h={window.innerHeight} id="error-page" bg={useColorModeValue('white', 'gray.200')}>
      <Center>
        <Box display='flex' alignItems='center' w='90%' h={window.innerHeight}>
          <Box display="flex" alignItems="center" w='100%' h={window.innerHeight}>
            <Box w='100%' textAlign='center'> 
              <Text textColor='black' fontWeight='bold' fontSize={100} mb={15}> Oops! </Text>
              <Text textColor='red' fontWeight='bold'> Sorry, an unexpected error has occurred. </Text>
              <Text textColor='red' fontWeight='bold'> {error.statusText || error.message} </Text>
           </Box>
          </Box>
        </Box> 
      </Center>
      
    </Box>
  );
}