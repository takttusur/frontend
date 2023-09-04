import { Image, Flex, Box, IconButton, Stack, useColorModeValue, HStack, useDisclosure, Link } from '@chakra-ui/react';
import taktLogo from '../../assets/takt.svg';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';

const NEWS = {
  label: 'Новости',
  link: 'News',
};
const EVENTS = {
  label: 'События',
  link: 'CurrentEvents',
};
const EQUIPMENT = {
  label: 'Снаряжение',
  link: 'Equipment',
};
const ImgAttributesForMainPage = {
  href: 'https://vk.com/takt_tusur',
  title: 'Перейти на страницу клуба в VK',
};
const ImgAttributesForOtherPage = {
  href: '/',
  title: 'Перейти главную страницу',
};

export default function MainMenu(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = [ EVENTS, EQUIPMENT, NEWS ];
  const ImgProps = props.page == 'Main' ? ImgAttributesForMainPage : ImgAttributesForOtherPage;

  return (
        <>
            <Box w='100%' position='fixed' bg={useColorModeValue('gray.100', 'gray.900')} px={4} zIndex={10}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link {...ImgProps}>
                            <Image src={taktLogo} boxSize='50px'/>
                        </Link>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link.label} {...{
                                  label: link.label,
                                  link: link.link,
                                }} />
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
  
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.label} {...{
                                  label: link.label,
                                  link: link.link,
                                }} />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Box h={16}/>
        </>
  );
}