import {Box, Center, SimpleGrid} from '@chakra-ui/react';
import ArticleBigCard from "./ArticleBigCard.tsx";

export default function NewsWidget() {
  return (
    <Box borderWidth='1px' borderColor='black'>
        <Center>
            <SimpleGrid>
                <ArticleBigCard></ArticleBigCard>
                <ArticleBigCard></ArticleBigCard>
                <ArticleBigCard></ArticleBigCard>
            </SimpleGrid>
        </Center>     
    </Box>
  );
}