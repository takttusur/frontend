import { LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'

interface INavLinkProps {
    label: string
    link: string
    isExternal?: boolean
}

export default function NavLink(goto: INavLinkProps) {
    return (
        <LinkBox
            fontWeight={500}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
        >
            <LinkOverlay
                href={!goto.isExternal ? `/${goto.link}` : goto.link}
                title={goto.label}
            />
            {goto.label}
        </LinkBox>
    )
}
