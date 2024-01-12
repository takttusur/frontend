import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    LinkOverlay,
    Stack,
    Text,
} from '@chakra-ui/react'
import DateService from '../../services/DateService/index.ts'

interface IArticleBigCardProps {
    imageUrl?: string
    text: string
    goUrl: string
    date: Date
}

export default function ArticleBigCard(
    props: IArticleBigCardProps
): JSX.Element {
    return (
        <Card w="md">
            <CardBody>
                <Image src={props.imageUrl} borderRadius="lg" />
                <Stack mt="3">
                    <Heading size="xs" textColor="blackAlpha.600">
                        {DateService.understandableDate(props.date)}
                    </Heading>
                    <Text>{props.text}</Text>
                </Stack>
            </CardBody>
            <CardFooter justify="end">
                <Button variant="solid">
                    <LinkOverlay href={props.goUrl} isExternal={true}>
                        Подробнее
                    </LinkOverlay>
                </Button>
            </CardFooter>
        </Card>
    )
}
