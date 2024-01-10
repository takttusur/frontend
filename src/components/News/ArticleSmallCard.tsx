import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    LinkOverlay,
    Stack,
    Text,
} from '@chakra-ui/react'
import DateService from '../../services/DateService'

interface IArticleSmallCardProps {
    text: string
    date: Date
    goUrl: string
}

export default function ArticleSmallCard(
    props: IArticleSmallCardProps
): JSX.Element {
    return (
        <Card w="md">
            <CardBody>
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
