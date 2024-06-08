import { IAppRoute } from '../common/IAppRoute.ts'
import IntroductionPage from './IntroductionPage.tsx'
import EdaPage from './EdaPage.tsx'
import CreatePage from './CreatePage.tsx'

export const ROUTE_INTRODUCTION: IAppRoute = {
    path: '/eda',
    element: <IntroductionPage />,
    title: 'Создание раскладки',
}

export const ROUTE_CREATE: IAppRoute = {
    path: '/eda/create',
    element: <CreatePage />,
    title: 'Анкета - Создание раскладки',
}

export const Routes: IAppRoute = {
    path: '/eda',
    element: <EdaPage />,
    title: 'Еда в поход',
    children: [ROUTE_INTRODUCTION, ROUTE_CREATE],
}
