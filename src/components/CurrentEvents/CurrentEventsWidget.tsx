import './CurrentEventsWidget.css'
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'

export default function CurrentEventsWidget(): JSX.Element {
    return (
        <>
            <Heading as="h2" size="xl" className="events-title">
                События
            </Heading>
            <div className="flex-container">
                <Card w="md">
                    <CardBody>
                        <Image
                            src="https://sun9-35.userapi.com/impg/rn95PzFKZlO5sSEtJHPlNh-G0okrMrMcBZjk-Q/_TEXhgjuAUY.jpg?size=2560x1920&quality=95&sign=7ae8ee67ce3aa3bbbdf6bc2cc17a0f03&type=album"
                            borderRadius="lg"
                        />
                        <Stack mt="3">
                            <Heading size="md">Зимние СПАСы - 2023</Heading>
                            <Text size="xs" textColor="red.400">
                                Мероприятие состоялось 22.10.2023
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card w="md">
                    <CardBody>
                        <Image
                            src="https://sun9-35.userapi.com/impg/rn95PzFKZlO5sSEtJHPlNh-G0okrMrMcBZjk-Q/_TEXhgjuAUY.jpg?size=2560x1920&quality=95&sign=7ae8ee67ce3aa3bbbdf6bc2cc17a0f03&type=album"
                            borderRadius="lg"
                        />
                        <Stack mt="3">
                            <Heading size="md">
                                Набор в Туристско-Альпинистский клуб «ТАКТ»
                            </Heading>
                            <Text size="xs" textColor="green.500">
                                Мероприятие запланировано на 12.02.2024
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card w="md">
                    <CardBody>
                        <Image
                            src="https://sun9-35.userapi.com/impg/rn95PzFKZlO5sSEtJHPlNh-G0okrMrMcBZjk-Q/_TEXhgjuAUY.jpg?size=2560x1920&quality=95&sign=7ae8ee67ce3aa3bbbdf6bc2cc17a0f03&type=album"
                            borderRadius="lg"
                        />
                        <Stack mt="3">
                            <Heading size="md">
                                Тренировка по Технике Водного Туризма 2023 (ТВТ)
                            </Heading>
                            <Text size="xs" textColor="green.500">
                                Мероприятие запланировано на 05.05.2024
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}
