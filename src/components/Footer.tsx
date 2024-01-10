import { Box, LinkBox } from '@chakra-ui/react'

export default function Footer(): JSX.Element {
    return (
        <>
            <Box textColor={'white'} bg="black" h={50} position={'relative'}>
                <LinkBox
                    position={'absolute'}
                    w={'fit-content'}
                    px={2}
                    py={1}
                ></LinkBox>
            </Box>
        </>
    )
}
