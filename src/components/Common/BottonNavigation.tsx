import './BottomNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCartShopping,
    faBorderAll,
    faBookOpen,
} from '@fortawesome/free-solid-svg-icons'

export default function BottomNavigation(): JSX.Element {
    return (
        <div className="bottom-navigation-space">
            <div className="bottom-navigation-container">
                <div className="bottom-navigation-button">
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="bottom-navigation-icon"
                    />
                    <span>Список продуктов</span>
                </div>
                <div className="bottom-navigation-button">
                    <FontAwesomeIcon
                        icon={faBorderAll}
                        className="bottom-navigation-icon"
                    />
                    <span>Моя раскладка</span>
                </div>
                <div className="bottom-navigation-button">
                    <FontAwesomeIcon
                        icon={faBookOpen}
                        className="bottom-navigation-icon"
                    />
                    <span>Рецепты</span>
                </div>
            </div>
        </div>
    )
}
