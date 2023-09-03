import { LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react';

interface INavLinkProps {
  label: string;
  link: string;
}

export default function NavLink(goto:INavLinkProps) {
  return (
    <LinkBox
      fontWeight={500}       
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}>
        <LinkOverlay href = {`/${goto.link}`} title={`Подробнее о ${goto.label}`} />
        {goto.label}
    </LinkBox>
  );
}