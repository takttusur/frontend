import './App.css'
import MainMenu from './components/Navigation/MainMenu'
import Footer from './components/Footer'

import { useRoutes } from 'react-router-dom'
import rootRoutes from './routes/'

const routes = rootRoutes.getRoutes()

export default function App(): JSX.Element {
    const routesElement = useRoutes(routes)

    return (
        <>
            <MainMenu />
            {routesElement}
            <Footer />
        </>
    )
}
