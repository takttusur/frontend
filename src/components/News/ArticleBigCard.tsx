import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    LinkOverlay,
    Stack,
    Text,
} from '@chakra-ui/react'

interface IArticleBigCardProps {
    imageUrl?: string
    text: string
    goUrl: string
}

export default function ArticleBigCard(
    props: IArticleBigCardProps
): JSX.Element {
    return (
        <Card w="md">
            <CardBody>
                <Image src={props.imageUrl} borderRadius="lg" />
                <Stack mt="3">
                    <Text>{props.text}</Text>
                </Stack>
            </CardBody>
            <CardFooter justify="end">
                <Button variant="solid" colorScheme="blue">
                    <LinkOverlay href={props.goUrl}>Подробнее</LinkOverlay>
                </Button>
            </CardFooter>
        </Card>
    )
}
