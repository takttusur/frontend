import { Button, Center, Spinner } from '@chakra-ui/react'
import ArticleBigCard from './ArticleBigCard.tsx'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../services/NewsService/QueryKeys.ts'
import NewsService from '../../services/NewsService'
import { useState } from 'react'
import ArticleSmallCard from './ArticleSmallCard.tsx'
import './NewsWidget.css'
import { ApiQueryCollectionResult } from '../../services/Common/ApiResult.ts'
import { Article } from '../../services/NewsService/Article.ts'
import ScrollReachedMarker from '../Common/ScrollReachedMarker.tsx'

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
    const fetchNews = (o: {
        pageParam: number
    }): Promise<ApiQueryCollectionResult<Article>> => {
        return NewsService.getLatestArticles(o.pageParam, state.pageSize)
    }
    const {
        status,
        hasNextPage,
        fetchNextPage,
        data,
        refetch,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: [QueryKeys.getArticles],
        queryFn: fetchNews,
        initialPageParam: 0,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            if (lastPage.data.length === 0) return undefined
            return lastPageParam + state.pageSize
        },
        refetchOnWindowFocus: false,
        retry: false,
    })

    const handleUserScrollFinished = (): void => {
        fetchNextPage().then(
            () => {},
            () => {}
        )
    }

    const renderLoader = (): JSX.Element => {
        return status === 'pending' || isFetchingNextPage ? (
            <Spinner size="xl" />
        ) : (
            <></>
        )
    }

    const renderError = (): JSX.Element => {
        if (
            status !== 'pending' &&
            !isFetchingNextPage &&
            (status === 'error' || !data?.pages?.length)
        )
            return (
                <Button
                    colorScheme="red"
                    onClick={() => {
                        if (!data?.pages?.length) {
                            refetch().then(
                                () => {},
                                () => {}
                            )
                            return
                        }
                        fetchNextPage().then(
                            () => {},
                            () => {}
                        )
                    }}
                >
                    Произошла ошибка. Попробуем еще раз?
                </Button>
            )
        return <></>
    }

    const renderNews = (): JSX.Element[] => {
        if (!data?.pages?.length) return []
        const firstLineAmount = 2

        const firstLine = data.pages[0].data
            .slice(0, firstLineAmount)
            .map((a, index) => (
                <ArticleBigCard
                    key={index}
                    text={a.text}
                    goUrl={a.originalUrl}
                    date={a.date}
                    imageUrl={a.imageUrl}
                />
            ))
        const all = data.pages
            .flatMap((p) => p.data)
            .map((a, index) => (
                <ArticleSmallCard
                    key={index + firstLineAmount}
                    text={a.text}
                    date={a.date}
                    goUrl={a.originalUrl}
                />
            ))

        return firstLine.concat(all)
    }

    return (
        <>
            <h1 className="news-title">Новости</h1>
            <div className="flex-container">{renderNews()}</div>
            <Center>
                {renderError()}
                {renderLoader()}
                {status === 'success' && hasNextPage && (
                    <ScrollReachedMarker
                        onReached={handleUserScrollFinished}
                    ></ScrollReachedMarker>
                )}
            </Center>
        </>
    )
}
