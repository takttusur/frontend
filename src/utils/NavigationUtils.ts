import { INavLinkProps } from '../components/Navigation/NavLink.tsx'
import { IAppRoute } from '../pages/common/IAppRoute.ts'

export function ToNavLinkProps(route: IAppRoute): INavLinkProps {
    return {
        label: route.title,
        link: route.path,
    }
}
