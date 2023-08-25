/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, Flex, Box, IconButton, Stack, useColorModeValue, HStack, useDisclosure } from '@chakra-ui/react';
import taktLogo from './assets/takt.svg';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './App.css';
import News from './News';
import WallpaperCarousel from './WallpaperCarousel';

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

export default function MainMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = ['Новости', 'События', 'Склад'];
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image src={taktLogo} alt="Перейти на страницу в VK" boxSize='50px' />
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <WallpaperCarousel></WallpaperCarousel>
      <News></News>
    </>
  );
}
//href="https://vk.com/takt_tusur"