import { Outlet } from 'react-router-dom'
import MainMenu from '../../shared/ui/MainMenu.tsx'

export default function EdaPage(): JSX.Element {
    return (
        <>
            <MainMenu />
            <Outlet />
        </>
    )
}
