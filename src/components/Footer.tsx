import { Text, Box, Center } from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
        <Box bg='black' h={100}>
          <Center>
            <Box display="flex" alignItems="center" h={100}>
              <Text textColor='white'> Footer </Text>  
            </Box>
          </Center>
        </Box>
    </>
  );
}