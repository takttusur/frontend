import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import './ProcessingPage.css'

function ProcessingPage(): JSX.Element {
    return (
        <div className="eda-loading-container">
            <FontAwesomeIcon
                icon={faBowlFood}
                beatFade={true}
                className="eda-loading-icon"
            />
            <p>Происходит магия. Раскладка будет готова через пару мгновений</p>
        </div>
    )
}

export default ProcessingPage
