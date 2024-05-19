import './ExpandablePanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface ExpandablePanelProps {
    title: string
}

interface ExpandablePanelState {
    isOpened: boolean
}

export default function ExpandablePanel(
    props: React.PropsWithChildren<ExpandablePanelProps>
): JSX.Element {
    const [state, setState] = useState<ExpandablePanelState>({
        isOpened: false,
    })

    const className = state.isOpened
        ? 'expandable-panel expanded'
        : 'expandable-panel'

    return (
        <div className={className}>
            <div className="expandable-panel-header">
                <p>{props.title}</p>
                <button
                    onClick={() =>
                        setState((prev) => ({
                            ...prev,
                            isOpened: !prev.isOpened,
                        }))
                    }
                >
                    <FontAwesomeIcon
                        icon={state.isOpened ? faChevronDown : faChevronUp}
                        className="expandable-panel-icon"
                    />
                </button>
            </div>
            {state.isOpened && (
                <div className="expandable-panel-content">{props.children}</div>
            )}
        </div>
    )
}
