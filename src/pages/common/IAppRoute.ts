export interface IAppRoute {
    readonly path: string
    readonly element: JSX.Element
    readonly title: string
    readonly children?: IAppRoute[]
}
