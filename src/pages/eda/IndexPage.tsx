import MainMenu from '../../components/Navigation/MainMenu.tsx'
import { Outlet } from 'react-router-dom'

export default function IndexPage(): JSX.Element {
    return (
        <>
            <MainMenu />
            <Outlet />
        </>
    )
}
