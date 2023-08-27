import {Box, useColorModeValue} from "@chakra-ui/react";

interface INavLinkProps {
    children: string;
}

export default function NavLink(props: INavLinkProps) {
    return (<Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={`#${props.children}`}>
        {props.children}
    </Box>)
}