import { Text, Box, useColorModeValue, Center } from '@chakra-ui/react';

export default function EquipmentComponent() {
  return (
    <Box borderWidth='1px' borderColor='black' bg={useColorModeValue('gray.200', 'gray.700')} h={400}>
        <Center>
            <Box display='flex' alignItems='center' w='90%' h={398} bg='gray.400'>
                <Box display="flex" alignItems="center" w='100%'>
                    <Text w='100%' textAlign='center'> Equipment </Text>
                </Box>         
            </Box>
        </Center>            
    </Box>
  );
}