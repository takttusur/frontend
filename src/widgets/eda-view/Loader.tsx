import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import './Loader.css'

function ProcessingPage(): JSX.Element {
    return (
        <div className="eda-loading-container">
            <FontAwesomeIcon
                icon={faBowlFood}
                beatFade={true}
                className="eda-loading-icon"
            />
            <p>Ваша раскладка скоро появится здесь</p>
        </div>
    )
}

export default ProcessingPage
