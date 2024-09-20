import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import './StatusStyle.css'

function ProcessingPage(): JSX.Element {
    return (
        <div className="eda-status-container">
            <FontAwesomeIcon
                icon={faBowlFood}
                beatFade={true}
                className="eda-status-icon"
            />
            <p>Ваша раскладка скоро появится здесь</p>
        </div>
    )
}

export default ProcessingPage
