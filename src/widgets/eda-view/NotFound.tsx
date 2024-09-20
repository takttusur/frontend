import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotdef } from '@fortawesome/free-solid-svg-icons'
import './StatusStyle.css'

function NotFound(): JSX.Element {
    return (
        <div className="eda-status-container">
            <FontAwesomeIcon
                icon={faNotdef}
                beatFade={true}
                className="eda-status-icon"
            />
            <p>Такой раскладки нет</p>
        </div>
    )
}

export default NotFound
