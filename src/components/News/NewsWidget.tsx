import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'
import ArticleBigCard from './ArticleBigCard.tsx'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../services/NewsService/QueryKeys.ts'
import NewsService from '../../services/NewsService'
import { useState } from 'react'

interface INewsWidgetState {
    currentPage: number
    pageSize: number
}

const initialState: INewsWidgetState = {
    currentPage: 0,
    pageSize: 10,
}

export default function NewsWidget(): JSX.Element {
    const [state] = useState<INewsWidgetState>(initialState)

    const { isPending, isError, data } = useQuery({
        queryKey: [QueryKeys.getArticles, state.currentPage],
        queryFn: () =>
            NewsService.getLatestArticles(
                state.currentPage * state.pageSize,
                state.pageSize
            ),
        placeholderData: keepPreviousData,
    })

    const loader = (
        <Center>
            <Spinner size="xl" />
        </Center>
    )
    const result = (): JSX.Element => {
        if (isError || !data) return <span>Error</span>

        const firstLine = data.data.slice(0, 2)
        const list = data.data.slice(3)

        return (
            <Wrap align="top" justify="center">
                {firstLine.map((a, index) => (
                    <WrapItem key={index}>
                        <ArticleBigCard
                            text={a.text}
                            goUrl={a.originalUrl}
                            imageUrl={a.imageUrl}
                            date={a.date}
                        />
                    </WrapItem>
                ))}
                {list.map((a, index) => (
                    <WrapItem key={index}>{a.text}</WrapItem>
                ))}
            </Wrap>
        )
    }

    return isPending ? loader : result()
}
