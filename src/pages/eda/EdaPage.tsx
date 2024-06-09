import { Outlet, useNavigate } from 'react-router-dom'
import MainMenu from '../../shared/ui/MainMenu.tsx'
import rootAppRoutingMap from '../index.tsx'

export default function EdaPage(): JSX.Element {
    const navigate = useNavigate()
    const handleLogoClick = (): void => {
        navigate(rootAppRoutingMap.Root.path)
    }

    return (
        <>
            <MainMenu onLogoClick={handleLogoClick} />
            <Outlet />
        </>
    )
}
