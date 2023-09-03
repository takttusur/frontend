import { LinkBox, LinkOverlay, Text, Box, useColorModeValue, Center } from '@chakra-ui/react';

export default function EquipmentWidget() {
  return (
    <Box borderWidth='1px' borderColor='black' bg={useColorModeValue('gray.200', 'gray.700')} h={400}>
        <Center>
            <Box w='90%' h={398} bg='gray.400'>
                <Box position='relative' w='100%' h={398} bg='gray'>
                  <Text position='absolute' top='50%' w='100%' textAlign='center'> Equipment </Text>
                  <LinkBox 
                    position='absolute' bottom='0%' right='0%' display="flex" alignItems="center" w='fit-content' h={50}
                    textDecorationLine='underline'
                    fontWeight={500}                    
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.200', 'gray.700'),
                    }}>
                    <LinkOverlay href = '/Equipment' />
                    Подробнее
                  </LinkBox>                   
                </Box>         
            </Box>
        </Center>            
    </Box>
  );
}