import { Box, Center, SimpleGrid, Spinner } from '@chakra-ui/react'
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

    const loader = <Spinner size="xl" />
    const result =
        isError || !data ? (
            <span>error</span>
        ) : (
            <SimpleGrid>
                {data.data.map((a, index) => (
                    <ArticleBigCard
                        key={index}
                        text={a.text}
                        goUrl={a.originalUrl}
                        imageUrl={a.imageUrl}
                    />
                ))}
            </SimpleGrid>
        )

    return (
        <Box borderWidth="1px" borderColor="black">
            <Center>{isPending ? loader : result}</Center>
        </Box>
    )
}
