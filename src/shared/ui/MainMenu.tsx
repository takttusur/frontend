import './MainMenu.css'
import { PropsWithoutRef } from 'react'

export interface IMainMenuProps {
    onLogoClick?: () => void
}

export default function MainMenu(
    props: PropsWithoutRef<IMainMenuProps>
): JSX.Element {
    let logoClass = 'logo logo_takt'
    if (props.onLogoClick) {
        logoClass += ' logo_clickable'
    }

    return (
        <header className="menu menu_position_top">
            <span className={logoClass} onClick={() => props.onLogoClick?.()}>
                TAKT
            </span>
        </header>
    )
}
