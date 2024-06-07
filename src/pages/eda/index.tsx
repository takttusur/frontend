import { IAppRoute } from '../common/IAppRoute.ts'
import IntroductionPage from './IntroductionPage.tsx'
import IndexPage from './IndexPage.tsx'

export const Routes: IAppRoute = {
    path: '/eda',
    element: <IndexPage />,
    title: 'Еда в поход',
    children: [
        {
            path: '/eda',
            element: <IntroductionPage />,
            title: '',
        },
    ],
}
