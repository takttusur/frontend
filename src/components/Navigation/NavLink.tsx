import { LinkBox, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export interface INavLinkProps {
    label: string
    link: string
}

export default function NavLink(goto: INavLinkProps): JSX.Element {
    return (
        <Link to={goto.link} title={goto.label}>
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
                {goto.label}
            </LinkBox>
        </Link>
    )
}
