import './ExpandablePanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { PropsWithChildren, useState } from 'react'

interface IExpandablePanelProps {
    title: string
}

interface IExpandablePanelState {
    isOpened: boolean
}

export default function ExpandablePanel(
    props: PropsWithChildren<IExpandablePanelProps>
): JSX.Element {
    const [state, setState] = useState<IExpandablePanelState>({
        isOpened: false,
    })

    const className = state.isOpened
        ? 'expandable-panel expandable-panel_expanded'
        : 'expandable-panel'

    return (
        <div className={className}>
            <div className="expandable-panel__header">
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
                        icon={state.isOpened ? faChevronUp : faChevronDown}
                        className="expandable-panel__header__icon"
                    />
                </button>
            </div>
            {state.isOpened && (
                <div className="expandable-panel__content">
                    {props.children}
                </div>
            )}
        </div>
    )
}
