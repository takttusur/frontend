import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
        <Box textColor={'white'} bg='black' h={50} position={'relative'}>
          <LinkBox
            position={'absolute'}
            w={'fit-content'}
            px={2}
            py={1}
            >            
            <LinkOverlay href='https://vk.com/takt_tusur' title='Перейти на страницу клуба в VK'>
              <Text textDecorationLine={'underline'} fontSize={20}> Наша группа Вк </Text>
            </LinkOverlay>
          </LinkBox>
        </Box>
    </>
  );
}