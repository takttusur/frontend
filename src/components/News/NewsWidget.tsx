import { Button, Center, Spinner } from '@chakra-ui/react'
import ArticleBigCard from './ArticleBigCard.tsx'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../services/NewsService/QueryKeys.ts'
import NewsService from '../../services/NewsService'
import { useState } from 'react'
import ArticleSmallCard from './ArticleSmallCard.tsx'
import './NewsWidget.css'

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

    const query = useQuery({
        queryKey: [QueryKeys.getArticles, state.currentPage],
        queryFn: () =>
            NewsService.getLatestArticles(
                state.currentPage * state.pageSize,
                state.pageSize
            ),
        placeholderData: keepPreviousData,
        retry: false,
        refetchOnWindowFocus: false,
    })

    const loader = (
        <Center>
            <Spinner size="xl" />
        </Center>
    )

    const result = (): JSX.Element => {
        if (query.isError || !query.data)
            return (
                <Center>
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            query.refetch().then(
                                () => {},
                                () => {}
                            )
                        }}
                    >
                        Произошла ошибка. Попробуем еще раз?
                    </Button>
                </Center>
            )

        const firstLine = query.data.data.slice(0, 2)
        const list = query.data.data.slice(3)

        return (
            <div className="flex-container">
                {firstLine.map((a, index) => (
                    <ArticleBigCard
                        key={index}
                        text={a.text}
                        goUrl={a.originalUrl}
                        imageUrl={a.imageUrl}
                        date={a.date}
                    />
                ))}
                {list.map((a, index) => (
                    <ArticleSmallCard
                        key={index}
                        text={a.text}
                        date={a.date}
                        goUrl={a.originalUrl}
                    />
                ))}
            </div>
        )
    }

    return query.isPending ? loader : result()
}
