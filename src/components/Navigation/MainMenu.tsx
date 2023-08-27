import {Image, Flex, Box, IconButton, Stack, useColorModeValue, HStack, useDisclosure, Link} from '@chakra-ui/react';
import taktLogo from '../../assets/takt.svg';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import NavLink from "./NavLink";

export const NEWS_SECTION: string = "Новости";
export const EVENTS_SECTION: string = "События";
export const EQUIPMENT_SECTION: string = "Снаряжение";

export default function MainMenu() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const Links = [EVENTS_SECTION, EQUIPMENT_SECTION, NEWS_SECTION];

    return (
        <>
            <Box w='100%' position='fixed' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link href="https://vk.com/takt_tusur" title="Перейти на страницу клуба в VK">
                            <Image src={taktLogo} boxSize='50px'/>
                        </Link>
                        <HStack as={'nav'} spacing={4} display={{base: 'none', md: 'flex'}}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
  
                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Box h={16}/>
        </>
    );
}