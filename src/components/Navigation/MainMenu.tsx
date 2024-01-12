import {
    Image,
    Flex,
    Box,
    IconButton,
    Stack,
    useColorModeValue,
    HStack,
    useDisclosure,
} from '@chakra-ui/react'
import taktLogo from '../../assets/takt.svg'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NavLink, { INavLinkProps } from './NavLink'
import { Link } from 'react-router-dom'
import rootRoutes from '../../routes'
import { ToNavLinkProps } from '../../utils/NavigationUtils.ts'

const links: INavLinkProps[] = [
    {
        link: 'http://vk.com/takt_tusur',
        label: 'Группа VK',
    },
    ToNavLinkProps(rootRoutes.Equipment),
    ToNavLinkProps(rootRoutes.CurrentEvents),
]

export default function MainMenu(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box
                w="100%"
                position="fixed"
                bg={useColorModeValue('gray.100', 'gray.900')}
                px={4}
                zIndex={10}
            >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link to="/Home" title="Перейти главную страницу">
                            <Image src={taktLogo} boxSize="50px" />
                        </Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {links.map((link) => (
                                <NavLink
                                    key={link.label}
                                    {...{
                                        label: link.label,
                                        link: link.link,
                                    }}
                                />
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <NavLink {...ToNavLinkProps(rootRoutes.Home)} />
                            {links.map((link) => (
                                <NavLink
                                    key={link.label}
                                    {...{
                                        label: link.label,
                                        link: link.link,
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Box h={16} />
        </>
    )
}
