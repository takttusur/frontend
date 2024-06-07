import { Navigate, RouteObject } from 'react-router-dom'
import HomePage from './HomePage.tsx'
import MealEditorPage from './MealEditorPage.tsx'
import CurrentEventsPage from './CurrentEvents.tsx'
import EquipmentPage from './Eqiupment.tsx'
import { IAppRoutingMap } from './common/IAppRoutingMap.ts'
import { IAppRoute } from './common/IAppRoute.ts'
import { Routes as EdaRoutes } from './eda'

function isIAppRoute(o: IAppRoute): boolean {
    const props = Object.getOwnPropertyNames(o)
    return o && props.includes('path') && props.includes('element')
}

class RootAppRoutingMap extends Object implements IAppRoutingMap {
    public readonly Home: IAppRoute = {
        path: '/home',
        element: <HomePage />,
        title: 'Главная',
    }
    public readonly Root: IAppRoute = {
        path: '/',
        element: <Navigate to={this.Home.path} replace={true} />,
        title: '',
    }
    public readonly MealEditor: IAppRoute = {
        path: '/mealEditor',
        element: <MealEditorPage />,
        title: 'Редактор раскладок',
    }
    public readonly CurrentEvents: IAppRoute = {
        path: '/currentEvents',
        element: <CurrentEventsPage />,
        title: 'События',
    }
    public readonly Equipment: IAppRoute = {
        path: '/equipment',
        element: <EquipmentPage />,
        title: 'Снаряжение',
    }
    public readonly Eda: IAppRoute = EdaRoutes
    private _routes?: RouteObject[] = undefined

    // public readonly EdaSettings: IAppRoute = {
    //     path: '/eda/settings',
    //     element: <SettingsPage />,
    //     title: 'Еда в поход',
    // }
    //
    // public readonly EdaProcessing: IAppRoute = {
    //     path: '/eda/processing',
    //     element: <ProcessingPage />,
    //     title: 'Готовим раскладку',
    // }
    //
    // public readonly EdaView: IAppRoute = {
    //     path: 'eda/view',
    //     element: <ViewPage />,
    //     title: 'Просмотр раскладки',
    // }

    public getRoutes(): RouteObject[] {
        if (this._routes) return this._routes

        const keys = Object.keys(this) as Array<keyof RootAppRoutingMap>

        this._routes = keys
            .map((k) => this[k] as IAppRoute)
            .filter(isIAppRoute)
            .map((r) => ({
                element: r.element,
                path: r.path,
                children: r.children ? this.mapChildren(r.children) : undefined,
            }))
        return this._routes
    }

    private mapChildren(children: IAppRoute[]): RouteObject[] {
        return children.map((r) => ({
            element: r.element,
            path: r.path,
            children: r.children ? this.mapChildren(r.children) : undefined,
        }))
    }
}

const rootAppRoutingMap: RootAppRoutingMap = new RootAppRoutingMap()
export default rootAppRoutingMap
