import { IAppRoute } from '../common/IAppRoute.ts'
import IntroductionPage from './IntroductionPage.tsx'
import EdaPage from './EdaPage.tsx'
import CreatePage from './CreatePage.tsx'
import ViewPage from './ViewPage.tsx'

export const ROUTE_INTRODUCTION: IAppRoute = {
    path: '/eda',
    element: <IntroductionPage />,
    title: 'Раскладка в поход',
}

export const ROUTE_CREATE: IAppRoute = {
    path: '/eda/create',
    element: <CreatePage />,
    title: 'Создать - Раскладка в поход',
}

export const ROUTE_VIEW: IAppRoute = {
    path: '/eda/:id/view',
    element: <ViewPage />,
    title: 'Просмотр - Раскладка в поход',
}

export const Routes: IAppRoute = {
    path: '/eda',
    element: <EdaPage />,
    title: 'Еда в поход',
    children: [ROUTE_INTRODUCTION, ROUTE_CREATE],
}
